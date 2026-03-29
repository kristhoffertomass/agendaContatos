import './CartaoContato.css'

function CartaoContato({ contato, index, onExcluir }) {
  return (
    <div className="cartao">
      <div className="cartao-info">
        <p><span>Nome:</span> {contato.nome}</p>
        <p><span>Telefone:</span> {contato.telefone}</p>
        <p><span>Email:</span> {contato.email}</p>
      </div>

      <button onClick={() => onExcluir(index)}>Excluir</button>
    </div>
  )
}

export default CartaoContato