"use client";
import { ModeToggle } from "@/components/ui/modetoggle";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import { stringify } from "querystring";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <p>Tasks</p>
      {tasks?.map((task, idx) => <p key={idx}>{JSON.stringify(task)}</p>)}
    </div>
  );
}
