import React, { useEffect } from "react";
import { SVGComponent } from "../assets/svglogo";
import { BsChatLeftText } from "react-icons/bs";
import { getChatrooms } from "../api/api";
import { MyContext } from "../Context";

export function NavBar() {
    const [toggle, setToggle] = React.useState(false);
    const [chatrooms, setChatrooms] = React.useState([]);

    const {setMyState} = React.useContext(MyContext);

    //const [updateState] = React.useContext(MyContext);

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
        
        <nav className={`flex flex-col divide-y-2 box-border w-fit divide-stone-700/40 bg-gradient-to-t from-stone-700`}>
            <div className="flex items-center justify-center m-6 ">
                <SVGComponent className="w-10 h-10" />
            </div>

            <ul className={`flex flex-col justify-center items-center box-border`}>
                <li className="p-5 flex items-center gap-4" onClick={() => setToggle(!toggle)}>
                    <BsChatLeftText className="text-stone-100"/>
                    <span className={`${toggle ? "" : "hidden"}`}>Chatroom</span>
                </li>
                {toggle && (
                    <ul className="w-full flex flex-col items-center box-border">
                        {chatrooms.map((chatroom) => (
                            <li key={chatroom.id} className="w-[80%] my-2 p-2 rounded-lg bg-stone-700/80 box-border hover:bg-stone-700/60" onClick={() => setMyState(chatroom.id)}>
                                <span>{chatroom.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </ul>

        </nav>
    );
}

