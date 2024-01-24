import "./produto-vitrine.css";
import foto from "../../assets/hamburguer.png"

function ProdutoVitrine(){
    return <div className="produto-box text-center">
        <img src={foto} alt="" />

        <div>
            <h2>Spicy Burguer</h2>
            <p className="prod-vitrine-descricao">Hamburguer de 250g, queijo, tomate, alface e cebola</p>
            <p className="prod-vitrine-preco">R$18,90</p>
        </div>

        <div>
            <button>
                Adicionar
            </button>
        </div>
    </div>
}

export default ProdutoVitrine;