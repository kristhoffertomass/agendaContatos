import CartaoContato from './CartaoContato'

function ListaContatos({ contatos, onExcluir }) {
  return (
    <div>
      <h2>Contatos</h2>

      {contatos.length === 0 && <p>Nenhum contato cadastrado ainda.</p>}

      {contatos.map((contato, index) => (
        <CartaoContato
          key={index}
          contato={contato}
          index={index}
          onExcluir={onExcluir}
        />
      ))}

    </div>
  )
}

export default ListaContatos