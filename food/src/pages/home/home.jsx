import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import {produtos} from "../../dados.jsx"

function Home(){
    return <>
        <Navbar showMenu={true} />

        <div className="container">
            <div className="titulo text-center">
                <h1>Nosso Cardápio!</h1>
                <p className="subtitulo">Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo WhatsApp: (00) 00000-0000</p>
            </div>
        </div>

        <div className="text-center">
            {
                produtos.map(function(prod){
                    return <ProdutoVitrine key={prod.id}
                    id={prod.id}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    preco={prod.preco}
                    foto={prod.foto} />
                })
            }
        </div>
    </>
}
export default Home;