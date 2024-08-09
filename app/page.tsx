import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="underline text-white">hello world</h1>
      <Button>Click me</Button>
    </div>
  );
}
