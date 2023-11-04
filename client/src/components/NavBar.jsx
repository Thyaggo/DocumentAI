import React, { useEffect } from "react";
import { SVGComponent } from "../assets/svglogo";
import { BsChatLeftText, BsChevronDown, BsCheckLg } from "react-icons/bs";
import { AiOutlineUser, AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import useAxios from "../api/useAxios";
import { MyContext } from "../Context";
import { Avatar , Divider } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Modal, ModalContent, ModalHeader,ModalBody, ModalFooter,Input, useDisclosure} from "@nextui-org/react";


export function NavBar() {
    const [toggle, setToggle] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [chatrooms, setChatrooms] = React.useState([]);
    const [chatroom, setChatroom] = React.useState();
    const {setChatid, Logout} = React.useContext(MyContext);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [editingStates, setEditingStates] = React.useState({});
    const api = useAxios();

    const handleEditClick = (chatroomId) => {
        setEditingStates((prevEditingStates) => ({
        ...prevEditingStates,
        [chatroomId]: !prevEditingStates[chatroomId],
        }));
    };
    //const [updateState] = React.useContext(MyContext);

    useEffect(() => {
        // Aquí dentro, realizas la solicitud HTTP utilizando Axios o cualquier otra biblioteca que prefieras
        api.get(import.meta.env.VITE_ROUTE_CHATROOMS)
          .then(response => {
            // Cuando la promesa se resuelve con éxito, actualizas el estado con los datos
            setChatrooms(response.data);
          })
          .catch(error => {
            // Manejas errores si la promesa se rechaza
            console.error(error);
          });
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newChatroom = {
            name: chatroom,
            created_at: new Date().toLocaleTimeString(),
        };

        api.post(import.meta.env.VITE_ROUTE_CHATROOMS+'/', newChatroom)
        .then((res) => {
            localStorage.setItem('chatid', JSON.stringify(res.data));
            setChatrooms([...chatrooms, newChatroom]);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        
        <nav className={`dark flex flex-col ${open ? "w-[30%]" : "w-[8%]"} h-screen  bg-gradient-to-t from-stone-900 transition-width duration-200`}>
            <div className="flex items-center justify-center m-6 ">
                <SVGComponent className="w-10 h-10" onClick={() => setOpen(!open)}/>
            </div>
            <Divider className="my-4"/> 
            <ul className={`flex flex-col justify-center ${open ? 'items-start' : 'items-center'} box-border`}>
                <li className={`w-full p-4 flex items-center ${open ? 'justify-start' : 'justify-center'} gap-4 animate-fadeUpDown`}>
                    <BsChatLeftText className="text-emerald-200 shadow-lg shadow-emerald-900/50" />
                    <span className={`${open ? '' : 'hidden'} font-semibold`}>Chatroom</span>
                    <BsChevronDown
                        className={`ml-auto transform ${toggle ? 'rotate-180' : ''} ${open ? '' : 'hidden'} transition-transform duration-300 cursor-pointer`}
                        onClick={() => setToggle(!toggle)}
                    />
                </li>
                {toggle && open && (
                    <ul className="w-full flex flex-col items-center box-border">
                        <Button onPress={onOpen} className="w-[90%] my-1 p-2 rounded-lg bg-neutral-700/20 box-border hover:bg-neutral-700/40">
                            <span className="text-ellipsis overflow-hidden break-all text-base">New Chat</span>
                        </Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark text-white">
                            <ModalContent>
                            {(onClose) => (
                                <><ModalHeader>Create Chatroom</ModalHeader>
                                <ModalBody>
                                    <Input placeholder="Chatroom Name" onChange={(e) => setChatroom(e.target.value)} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button auto className="bg-emerald-400 text-black" onClick={handleSubmit} onPress={onClose}>Create</Button>
                                </ModalFooter></>
                              )}
                            </ModalContent>
                        </Modal>
                        <Divider className="w-[90%] opacity-50 my-2" />
                        {chatrooms.map((chatroom) => (
                            <li key={chatroom.id} className="flex justify-between w-[90%] my-1 p-2 rounded-lg bg-emerald-700/10 box-border hover:bg-emerald-700/40 animate-fadeUpDown" onClick={() => setChatid(chatroom.id)}>
                                {editingStates[chatroom.id] ? (
                                        <><input value={chatroom.name} onChange={(e) => setChatroom(e.target.value)} className="focus-visible:outline-none bg-transparent text-sm"/>
                                        <div className="flex gap-1">
                                            <BsCheckLg className="text-lg opacity-70" onClick={() => setIsEditing(!isEditing)}/>
                                            <AiOutlineClose className=" opacity-70" onClick={() => setIsEditing(!isEditing)}/>
                                        </div>
                                        </>
                                   ):(
                                        <><span className="text-ellipsis overflow-hidden break-all text-sm opacity-80">{chatroom.name}</span>
                                        <div className="flex gap-1">
                                            <AiOutlineEdit className="text-lg opacity-70" onClick={() => setIsEditing(!isEditing)}/>
                                            <AiOutlineDelete className="text-lg opacity-70" />
                                        </div></> 
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </ul>
            <div className="mt-auto flex items-center justify-start p-4 m-2 border-2 rounded-md border-neutral-800 bg-neutral-900">
                <Dropdown className="dark text-white">
                    <DropdownTrigger>
                        <Avatar
                            showFallback 
                            icon={<AiOutlineUser className="text-stone-900 text-lg"/>}
                            size="md"
                            classNames={{base: "bg-emerald-400 cursor-pointer hover:opacity-30 transition-opacity duration-200"}}
                        />
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => Logout()} className="text-emerald-300">Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                
            </div>
        </nav>
    );
}

