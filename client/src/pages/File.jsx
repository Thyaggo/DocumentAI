import { Pdfviewer } from "../components/Pdfviewer";
import { Pdfchat } from "../components/Pdfchat";
import { NavBar } from "../components/NavBar";

export function FilePage() {
  return (
    <div className="h-screen box-border flex bg-neutral-800 text-white">
      <NavBar />
      <Pdfviewer />
      <Pdfchat />
    </div>
  );
}