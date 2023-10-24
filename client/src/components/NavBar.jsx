import React, { useEffect } from "react";
import { SVGComponent } from "../assets/svglogo";
import { BsChatLeftText, BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { getChatrooms } from "../api/api";
import { MyContext } from "../Context";
import { Avatar , Divider } from "@nextui-org/react";

export function NavBar() {
    const [toggle, setToggle] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [chatrooms, setChatrooms] = React.useState([]);

    const {setMyState, Logout} = React.useContext(MyContext);

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
        
        <nav className={`dark flex flex-col  box-border ${open ? "w-[30%]" : "w-fit"}  bg-gradient-to-t from-stone-900`}>
            <div className="flex items-center justify-center m-6 ">
                <SVGComponent className="w-10 h-10" onClick={() => setOpen(!open)}/>
            </div>
            <Divider className="my-4"/> 
            <ul className={`flex flex-col justify-center ${open ? "items-start" : "items-center"} box-border`}>
                <li className={`w-full p-4 flex items-center  ${open ? "justify-start" : "justify-center"} gap-4`}>
                    <BsChatLeftText className="text-emerald-200 shadow-lg shadow-emerald-900/50"/>
                    <span className={`${open ? "" : "hidden"} font-semibold`}>Chatroom</span>
                    <BsChevronDown className={`ml-auto transform ${toggle ? "rotate-180" : ""} ${open ? "" : "hidden"} transition-transform duration-300 cursor-pointer`} onClick={() => setToggle(!toggle)}/>
                </li>
                {open && (
                    <ul className="w-full flex flex-col items-center box-border">
                        {chatrooms.map((chatroom) => (
                            <li key={chatroom.id} className="w-[90%] my-1 p-2 rounded-lg bg-stone-700/20 box-border hover:bg-stone-700/60" onClick={() => setMyState(chatroom.id)}>
                                <span className="text-sm opacity-80">{chatroom.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </ul>
            <div className="mt-auto flex items-center justify-center p-5">
                <Avatar
                    showFallback 
                    icon={<AiOutlineUser className="text-stone-900 text-lg"/>}
                    size="md"
                    onClick={() => Logout()}
                    classNames={{base: "bg-emerald-400 cursor-pointer hover:opacity-30 transition-opacity duration-200"}}
                />
            </div>
        </nav>
    );
}

