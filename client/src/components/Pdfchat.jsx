import React, {useState} from "react";
import {LuSendHorizonal} from "react-icons/lu"

export function Pdfchat(){
    const [promt, setPromt] = useState('');
    const [show, setShow] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        setShow(true);
    }

    function onChange(e) {
        setPromt(e.target.value);
        
    }

    return(
        <section className="w-4/6 grid grid-flow-col grid-rows-[87%_13%]">
            <div>
                {show && (<h1>{promt}</h1>)}
            </div>
            <form onSubmit={onSubmit} className="flex items-center justify-center ">
                <div className="flex justify-between  w-3/4 px-1 py-2 rounded-md bg-neutral-700">
                    <input type="text" value={promt} onChange={onChange} className="w-11/12 mx-2 h-full bg-transparent focus-visible:outline-none"/>
                    <button type="submit" className="px-3"> <LuSendHorizonal/> </button>
                </div>
            </form>
        </section>
    )
}