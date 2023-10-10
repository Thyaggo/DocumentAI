import React from "react";
import { SVGComponent } from "../assets/svgviewer-react-output";
import { BiSearch } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";


export function NavBar() {
    return (
        <nav className="w-[10%] flex flex-col divide-y-2 divide-stone-700/40">
            <div className="flex items-center justify-center m-6">
                <SVGComponent className="w-10 h-10" />
                <h6 className="m-2 font-semibold text-lg" >Document.AI</h6>
            </div>
            <ul className="flex flex-col justify-start mx-5 px-3 py-2">
                <li className="flex items-center my-2">
                    <BsChatLeftText className="text-cyan-700 w-4 h-4"/>
                    <h6 className="m-2 font-extralight">Chat</h6>
                </li>
                <li className="flex items-center my-2">
                    <BiSearch className="text-emerald-300 w-4 h-4"/>
                    <h6 className="m-2 font-extralight">Search</h6>
                </li>
            </ul>
        </nav>
    );
}

