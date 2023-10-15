import React, { useState, useEffect, useRef } from "react";
import { postPrompts } from "../api/api";
import { LuSendHorizonal } from "react-icons/lu";
import { MyContext } from "../Context";
import { getPromt } from "../api/api";
import { getRespond } from "../api/api";

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
            text: promt,
            chatid : myState,
            timestamp: new Date().toLocaleTimeString(),
        };

        const newResponse = {
            text: 'Hola',
            chatid : myState,
            timestamp: new Date().toLocaleTimeString(),
        };

        setPromtList([...promtList, newPromt]);
        setResponseList([...responseList, newResponse]);
        setPromt("");
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [promt]);

    console.log(myState)

    useEffect(() => {
        // Aquí dentro, realizas la solicitud HTTP utilizando Axios o cualquier otra biblioteca que prefieras
        if (myState !== undefined) {
            getPromt(myState)
                .then(responsed => {
                    // Cuando la promesa se resuelve con éxito, actualizas el estado con los datos
                    setPromtList(responsed.data);
                })
                .catch(error => {
                    // Manejas errores si la promesa se rechaza
                    console.error(error);
                });
            getRespond(myState)
                .then(response => {
                    // Cuando la promesa se resuelve con éxito, actualizas el estado con los datos
                    setResponseList(response.data);
                })
                .catch(error => {
                    // Manejas errores si la promesa se rechaza
                    console.error(error);
                });
        }
    }, [myState]);

    return (
        <div className="bg-emerald-950/20 w-full max-w-[50%] h-screen box-border flex flex-col">
            <section className=" h-[90vh]  overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                <main className="flex flex-col">
                    {promtList.map((promt, index) => (
                        <div key={index} className="max-w-[75%] self-end mx-5 my-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                            <div className="w-fit bg-neutral-700 rounded-md px-2 py-1 my-1">
                                <p>{promt.text}</p>
                                <small className="text-[0.6rem] opacity-50">
                                    {promt.timestamp}
                                </small>
                            </div>
                        </div>
                    ))}
                    {responseList.map((response, index) => (
                        <div key={index} className="max-w-[75%] self-start mx-5 my-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md">
                            <div className="w-fit bg-neutral-700 rounded-md px-2 py-1 my-1">
                                <p>{response.text}</p>
                                <small className="text-[0.6rem] opacity-50">
                                    {response.timestamp}
                                </small>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
            <section className="flex items-center justify-center box-border">
                <form
                    onSubmit={onSubmit}
                    className="mb-5 w-3/4 border-box"
                >
                    <div className="flex justify-between px-1 py-2 rounded-md bg-neutral-700  ">
                        <textarea
                            value={promt}
                            ref={textAreaRef}
                            rows="1"
                            placeholder="Escribe un mensaje"
                            onChange={(e) => setPromt(e.target.value)}
                            className="w-11/12 max-h-40 m-2 bg-transparent focus-visible:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md" />
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
