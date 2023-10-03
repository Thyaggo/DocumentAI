import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

export function NavBar() {
    return (
        <nav className="flex flex-col items-center">
            <div className="flex items-center justify-center m-5">
                <CgFileDocument className="text-red-700 w-10 h-10 m-1" />
                <h6 className="m-2 font-semibold" >Document.AI</h6>
            </div>
            <div className="flex items-center justify-center">
                <BiSearch className="text-emerald-300 w-5 h-5"/>
                <h6 className="m-2 font-extralight">Search</h6>
            </div>
        </nav>
    );
}

