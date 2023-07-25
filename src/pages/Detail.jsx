import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import DetailComp from "../components/Detail/DetailComp";
import Loading from "../components/loading";

const Detail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail, productDetailStatus} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])

    
    return(
        <div>
            {
                productDetailStatus == "LOADİNG" ? <Loading></Loading>: 
                <DetailComp productDetail= {productDetail}></DetailComp>
            }
        </div>
    )
}

export default Detail; 