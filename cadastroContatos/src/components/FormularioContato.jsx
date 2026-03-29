import { useState } from 'react'
import './FormularioContato.css'

function FormularioContato({ onAdicionar }) {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function handleAdicionar() {
    if (!nome || !telefone || !email) {
      alert('Preencha todos os campos!')
      return
    }

    const novoContato = { nome, telefone, email }
    onAdicionar(novoContato)

    setNome('')
    setTelefone('')
    setEmail('')
  }

  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  )
}

export default FormularioContato