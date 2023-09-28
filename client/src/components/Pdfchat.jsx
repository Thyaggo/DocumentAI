import React, {useState} from "react";
import {LuSendHorizonal} from "react-icons/lu"

export function Pdfchat(){
    const [promt, setPromt] = useState('');
    const [promtList, setPromtList] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        if (promt.trim() === '') {
            return; // No envíes mensajes vacíos
        }
      
        const newPromt = {
            text: promt,
            timestamp: new Date().toLocaleTimeString(),
        };

        setPromtList([...promtList, newPromt]);
        setPromt('');
    }

    return(
        <section className="w-7/12 grid grid-flow-col grid-rows-[87%_13%]">
            <main className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                {promtList.map((promt, index) => (
                    <div key={index} className="flex justify-end mx-5 my-2">
                        <div className="w-auto bg-neutral-700 rounded-md px-2 py-1 my-1">
                            <p>{promt.text}</p>
                            <small className="text-[0.6rem] opacity-50">{promt.timestamp}</small>
                        </div>
                    </div>
                ))}
            </main>
            <form onSubmit={onSubmit} className="flex items-center justify-center ">
                <div className="flex justify-between  w-3/4 px-1 py-2 rounded-md bg-neutral-700">
                    <input type="text" value={promt} onChange={e => setPromt(e.target.value)} className="w-11/12 mx-2 h-full bg-transparent focus-visible:outline-none"/>
                    <button type="submit" className="px-3"> <LuSendHorizonal/> </button>
                </div>
            </form>
        </section>
    )
}