import ChatRoom from "../components/ChatRoomPdf";
import { NavBar } from "../components/NavBar";

export function FilePage() {
  return (
    <div className="h-screen box-border flex bg-neutral-900 text-white">
      <NavBar />
      <ChatRoom />
    </div>
  );
}