import React, { useState } from "react";
import SliderComp from "../components/Home/SliderComp";
import Sorting from "../components/Home/Sorting"
import Category from "../components/Home/Category";
import Products from "../components/Home/Products";

const Home = ()=>{
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    
    return(
        <div>
            <SliderComp></SliderComp>
            <Sorting></Sorting>
            <div className="flex">
                <Category setCategory={setCategory}></Category>
                <Products category = {category}></Products>
                
            </div>
        </div>
    )
}

export default Home;