import React from "react";

const Sorting = ()=>{
    return(
        <div className="bg-gray-100 my-10 p-5 flex items-center justify-end">
            <select className="bg-gray-200 py-3 px-5" name="" id="" >
                 <option disabled value="">SEÇİNİZ</option>
                 <option value="inc">ARTAN</option>
                 <option value="dex">AZALAN</option>
            </select>
        </div>
    )
}

export default Sorting; 