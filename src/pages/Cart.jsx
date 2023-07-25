import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/Cart/CartComp";

const Cart = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {carts, totalAmount, itemsCount} = useSelector(state => state.carts)
    console.log(carts, "carts");
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return(
        <div>

            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, i) => (
                            <CartComp key={i} cart={cart}></CartComp>
                        ))
                    }
                    <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR : <span className="font-bold ml-4">  {totalAmount}  TL</span></div>
                </div> :
                
                <div></div> 
            }
        </div>
    )
}

export default Cart; 