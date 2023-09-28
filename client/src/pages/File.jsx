import { Pdfviewer } from "../components/Pdfviewer";
import { Pdfchat } from "../components/Pdfchat";

export function FilePage() {
  return (
    <div className="h-screen flex bg-neutral-800 text-white">
      <Pdfviewer />
      <Pdfchat />
    </div>
  );
}