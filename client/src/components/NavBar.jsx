import React from "react";
import { SVGComponent } from "../assets/svglogo";
import { BiSearch } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";


export function NavBar() {
    const [toggle, setToggle] = React.useState(false);

    return (
        
        <nav className={`flex flex-col divide-y-2 ${toggle ? "w-[25%]" : "w-fit"} divide-stone-700/40 bg-emerald-950/40`}>
            <div className="flex items-center justify-center m-6 ">
                <SVGComponent className="w-10 h-10" />
            </div>

            <ul className="flex flex-col justify-center items-center box-border">
                <li className="my-4" onClick={() => setToggle(!toggle)}>
                    <BsChatLeftText className="text-cyan-700"/>
                </li>
                {toggle && (
                    <div className="w-full flex items-center justify-center bg-neutral-600">
                        <p className="text-xs font-extralight text-white">1</p>
                    </div>
                )}
                <li className="my-4">
                    <BiSearch className="text-emerald-300"/>
                </li>
            </ul>

        </nav>
    );
}

