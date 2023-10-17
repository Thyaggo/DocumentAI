import React, { useState, useEffect, useRef } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MyContext } from "../Context";
import { getPromt, getRespond, postPrompts, postResponses } from "../api/api";

export function Pdfchat() {
    const textAreaRef = useRef(null);
    const [promt, setPromt] = useState("");
    const [promtList, setPromtList] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const {myState} = React.useContext(MyContext);

    function onSubmit(e) {
        e.preventDefault();

        if (promt.trim() === "") {
            return; // No envíes mensajes vacíos
        }

        const newPromt = {
            promt: promt,
            chatroom : myState,
            created_at: new Date().toLocaleTimeString(),
        };

        const newResponse = {
            response: 'Hola',
            chatroom : myState,
            created_at: new Date().toLocaleTimeString(),
        };

        postPrompts(newPromt);
        postResponses(newResponse);
        setPromtList([...promtList, newPromt]);
        setResponseList([...responseList, newResponse]);
        setPromt("");
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [promt]);


    useEffect(() => {
        if (myState !== undefined) {
            getPromt(myState)
                .then(response => {
                    // Verificar si response.data no es undefined y tiene una longitud mayor que cero
                    console.log(response);  
                    if (response !== undefined && response.length !== 0) {
                        setPromtList(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            getRespond(myState)
                .then(response => {
                    // Verificar si response.data no es undefined y tiene una longitud mayor que cero
                    console.log(response);
                    if (response !== undefined && response.length !== 0) {
                        setResponseList(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [myState]);

    return (
        <div className="bg-stone-800 w-full max-w-[55%] h-screen box-border flex flex-col">
            <section className=" h-[90vh]  overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                <main className="flex flex-col">
                    {promtList.map((promt, index) => (
                        <><div key={index} className="max-w-[75%] self-end mx-5 my-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                            <div className="w-fit bg-stone-700 rounded-md px-2 py-1 my-1">
                                <p>{promt.promt}</p>
                                <small className="text-[0.6rem] opacity-50">
                                    {promt.created_at}
                                </small>
                            </div>
                        </div>
                        <div className="max-w-[75%] self-start mx-5 my-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                            <div className="w-fit bg-stone-700 rounded-md px-2 py-1 my-1">
                                <p>{responseList[index].response}</p>
                                <small className="text-[0.6rem] opacity-50">
                                    {responseList[index].created_at}
                                </small>
                            </div>
                        </div></>
                    ))}
                </main>
            </section>
            <section className="flex items-center justify-center box-border">
                <form
                    onSubmit={onSubmit}
                    className="mb-5 w-3/4 border-box"
                >
                    <div className="flex justify-between px-1 py-2 rounded-md bg-stone-700">
                        <textarea
                            value={promt}
                            ref={textAreaRef}
                            rows="1"
                            placeholder="Escribe un mensaje"
                            onChange={(e) => setPromt(e.target.value)}
                            className="w-11/12 max-h-40 m-2 bg-transparent focus-visible:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md" 
                        />
                        <button type="submit" className="px-2 pb-3 mt-auto">
                            {" "}
                            <LuSendHorizonal />{" "}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
