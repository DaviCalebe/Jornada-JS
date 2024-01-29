
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function AddItemCart(item) {

        let cartItemsNovo = [];
        let findItem = false;

        //Verificar se o item ja existe no carrinho
        for (var prod of cartItems){

            //Encontrou
            if (prod.id == item.id){
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            } else {
                cartItemsNovo.push(prod);
            }

        }

        //Se nao encontrou o item ou é o primeiro item a ser inserido...
        if ((findItem == false) || (cartItems.length == 0)){
            cartItemsNovo.push(item);
        }
        //Insere dados na lista do carrinho...
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
    }

    function RemoveItemCart(id) {

        let cartItemsNovo = [];

        //Localiza o item e atualiza...
        for (var prod of cartItems){

            //Encontrou
            if (prod.id == id){
                prod.qtd = prod.qtd - 1;
            }

            cartItemsNovo.push(prod);
        }
        //Remove itens zerados...
        cartItemsNovo = cartItemsNovo.filter(function(item){
            return item.qtd > 0
        });

        //Atualiza lista do carrinho...
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);

    }

    function CalcTotal(items){
        let tot = 0;

        for (var item of items)
            tot = tot+ (item.preco * item.qtd);

        setTotalCart(tot);
    }

    return <CartContext.Provider value={{cartItems, setCartItems, AddItemCart, RemoveItemCart, totalCart}} >
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};