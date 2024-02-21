import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.jsx";
import back from "../../assets/back.png";

function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {cartItems, totalCart} = useContext(CartContext);

    useEffect( function(){
        window.addEventListener('openSidebar', function(){
            setShow(true);
        });

/*         setCartItems(carrinho); */
    },[show]);

    function checkout(){
        navigate('/checkout');
    }

    return <Dock
    position="right"
    isVisible={show}
    fluid={false}
    size={360}
    onVisibleChange={ function(visible){
        setShow(visible);
    }}>

        <div className="text-center">
            <img onClick={(e) => setShow(false)} src={back} className="cart-btn-close" />
            <h1>Meu Pedido</h1>
        </div>

        <div className="lista-produtos">
            {
                cartItems.map(function(item){
                    return <ProdutoCart key={item.id}
                    id={item.id}
                    foto={item.foto}
                    nome={item.nome}
                    qtd={item.qtd}
                    preco={item.preco} />
                })
            }
        </div>

        <div className="footer-card">
            <div className="footer-card-valor">
                <span>Total</span>
                <span><strong>{new Intl.NumberFormat('pt-BR',
                                     {style: 'currency', currency: "BRL"}).format(totalCart)}</strong></span>
            </div>
            <div>
                <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
            </div>
        </div>
    </Dock>
}

export default Cart;