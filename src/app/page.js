import { MainBox } from "@/components/MainBox";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex justify-center items-center h-full mt-56">
        <MainBox/>
      </main>
    </div>
  );
}
