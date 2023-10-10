import React, { useState, useEffect, useRef } from "react";
import { LuSendHorizonal } from "react-icons/lu";

export function Pdfchat() {
    const textAreaRef = useRef(null);
    const [promt, setPromt] = useState("");
    const [promtList, setPromtList] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        if (promt.trim() === "") {
            return; // No envíes mensajes vacíos
        }

        const newPromt = {
            text: promt,
            response: "Hola",
            timestamp: new Date().toLocaleTimeString(),
        };

        setPromtList([...promtList, newPromt]);
        setPromt("");
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [promt]);

    return (
        <section className="bg-neutral-800 w-[50%] h-screen box-border flex flex-col">
            <main className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                {promtList.map((promt) => (
                    <><div className="self-end mx-5 my-2">
                        <div className=" bg-neutral-700 rounded-md px-2 py-1 my-1 ">
                            <p>{promt.text}</p>
                            <small className="text-[0.6rem] opacity-50">
                                {promt.timestamp}
                            </small>
                        </div>
                    </div><div className="self-start mx-5 my-2">
                        <div className=" bg-neutral-700 rounded-md px-2 py-1 my-1 ">
                            <p>{promt.response}</p>
                            <small className="text-[0.6rem] opacity-50">
                                {promt.timestamp}
                            </small>
                        </div>
                    </div></>
                ))}
            </main>
            <form
                onSubmit={onSubmit}
                className="flex items-center justify-center mt-auto mb-5 box-border "
            >
                <div className="flex justify-between w-3/4 px-1 py-2 rounded-md bg-neutral-700 border-box ">
                    <textarea
                        value={promt}
                        ref={textAreaRef}
                        rows="1"
                        placeholder="Escribe un mensaje"
                        onChange={(e) => setPromt(e.target.value)}
                        className="w-11/12 max-h-56 m-2 bg-transparent focus-visible:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md"
                    />
                    <button type="submit" className="px-2 pb-3 mt-auto">
                        {" "}
                        <LuSendHorizonal />{" "}
                    </button>
                </div>
            </form>
        </section>
    );
}
