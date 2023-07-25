import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({cart})=>{
    const dispatch = useDispatch()  
    return(
        <div className="my-10 flex items-center justify-between">
            <img className="w-[200px] h-[200px] object-cover" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt=""></img>
            <div className="w-[130px]">
                <div className="text-xl">{cart?.title}</div>
            </div>
            <div className="font-bold text-2xl">{cart?.price} TL</div>
            <div>{cart?.quantity} Adet</div>
            <div onClick={() => dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] cursor-pointer text-2xl h-16 flex items-center justify-center">Ürünü Sil</div>
        </div>
    )
}

export default CartComp; 