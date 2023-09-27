import { Pdfviewer } from "../components/Pdfviewer";
import { Pdfchat } from "../components/Pdfchat";

export function FilePage() {
  return (
    <div className="flex bg-neutral-800">
      <Pdfviewer />
      <Pdfchat />
    </div>
  );
}