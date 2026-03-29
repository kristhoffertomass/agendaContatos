import { useState, useEffect } from 'react'
import FormularioContato from './components/FormularioContato'
import ListaContatos from './components/ListaContatos'
import './App.css'

function App() {

  const [contatos, setContatos] = useState(() => {
    const salvo = localStorage.getItem('contatos')
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos))
  }, [contatos])

  function adicionarContato(novoContato) {
    setContatos([...contatos, novoContato])
  }

  function excluirContato(index) {
    const novaLista = contatos.filter((_, i) => i !== index)
    setContatos(novaLista)
  }

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>
      <FormularioContato onAdicionar={adicionarContato} />
      <ListaContatos contatos={contatos} onExcluir={excluirContato} />
    </div>
  )
}

export default App