import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({productDetail})=>{
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)
    const decrement = () => {
        if(quantity != 0)
            setQuantity(quantity - 1)
    }
    const increment = () => {
        if(quantity != productDetail?.stock)
            setQuantity(quantity + 1)
    }
    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.name, price: productDetail?.price, quantity: quantity}))
    }
    return(
        <div>
            <div  className="flex gap-10 my-10">
                <img className="w-[400px] h-[400px]" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt=""></img>
                <div className="">
                    <div className="text-4xl font-bold"> name : {productDetail?.name}</div>
                    <div className="text-xl">description : {productDetail?.description}</div>
                    <div className="text-xl">category name : {productDetail?.category?.categoryName}</div>
                    <div className="text-2xl text-red-500">stock : {productDetail?.stock}</div>
                    <div className="text-5xl font-bold">{productDetail?.price} <span className="text-sm">TL</span></div>
                    <div className="flex items-center gab-5 my-4">
                        <div onClick={decrement} className="text-5xl cursor-pointer">-</div>
                        <input className="w-12 text-center text-4xl" type="text" value={quantity}></input>
                        <div onClick={increment} className="text-4xl cursor-pointer">+</div>
                    </div>
                    <div onClick={addBasket} className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16  flex items-center justify-center ">Sepete Ekle</div>
                </div>
            </div>

            <div className="">{productDetail?.productReviews?.map((reviews) => reviews.review)}</div>
        </div>
        
    )
}

export default DetailComp; 