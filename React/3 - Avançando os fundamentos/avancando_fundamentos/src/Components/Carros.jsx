function Carros( { nome , km , cor , marca , preco , venda } ) {
  return (
    <div>
        <div>
            <h3>Carro: { nome }</h3>
            <p>Km: { km }</p>
            <p>Cor: { cor }</p>
            <p>Marca: { marca }</p>
            <p>Preço: { preco }</p>
            <p>Venda: { venda }</p>
        </div>
    </div>
  )
}

export default Carros