import Tasks from "@/components/todomax/tasks";
import { ModeToggle } from "@/components/ui/modetoggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todolist</h1>
      <ModeToggle />
      <Tasks />
    </main>
  );
}
