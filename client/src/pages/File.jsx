import { NavBar } from "../components/NavBar";
import { Pdfviewer } from "../components/Pdfviewer";
import { Pdfchat } from "../components/Pdfchat";

export function FilePage() {
  return (
    <div className="h-screen box-border flex bg-neutral-900 text-white">
      <NavBar />
      <Pdfviewer />
      <Pdfchat />
    </div>
  );
}