import React, { useEffect } from "react";
import { SVGComponent } from "../assets/svglogo";
import { BiSearch } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { getChatrooms } from "../api/api";



export function NavBar() {
    const [toggle, setToggle] = React.useState(false);
    const [chatrooms, setChatrooms] = React.useState([]);
    const [currentChatroom, setCurrentChatroom] = React.useState(null);

    useEffect(() => {
        // Aquí dentro, realizas la solicitud HTTP utilizando Axios o cualquier otra biblioteca que prefieras
        getChatrooms()
          .then(response => {
            // Cuando la promesa se resuelve con éxito, actualizas el estado con los datos
            setChatrooms(response.data);
          })
          .catch(error => {
            // Manejas errores si la promesa se rechaza
            console.error(error);
          });
      }, []);

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
                    <ul className="w-full flex items-center justify-center bg-neutral-600">
                        <li>
                            {chatrooms.map((chatroom) => (
                                <div key={chatroom.id} className="flex flex-col justify-center items-center" onClick={() => setCurrentChatroom(chatroom.id)}>
                                    <span>{chatroom.name}</span>
                                </div>
                            ))}
                        </li>
                    </ul>
                )}
                <li className="my-4">
                    <BiSearch className="text-emerald-300"/>
                </li>
            </ul>

        </nav>
    );
}

