import { ModeToggle } from "@/components/ui/modetoggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todolist</h1>
      <ModeToggle />
    </main>
  );
}
