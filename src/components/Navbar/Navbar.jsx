import React from "react";
import NavbarRight from "./NavbarItem/NavbarRight";
import NavbarLeft from "./NavbarItem/NavbarLeft";

const Navbar = ()=>{
    return(
        <div className="flex items-center justify-between my-5">
            <NavbarLeft/>
            <NavbarRight/>
        </div>
    )
}

export default Navbar;