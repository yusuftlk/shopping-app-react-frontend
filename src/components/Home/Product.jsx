import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({product})=>{
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(`/products/${product?.id}`)} className="w-[280px] p-2 m-2 border rounded-md relative cursor-pointer mt-0 mb-3">
            <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-gray-200 text-black p-2 m-2">{product?.price} <span className="text-sm">TL</span></div>
            <img className="w-[200px] h-[200px] object-cover m-auto" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt=""></img>
            <div className="text-center px-3 mt-3 text-xl font-bold">{product?.name}</div>
        </div>
    )
}

export default Product; 