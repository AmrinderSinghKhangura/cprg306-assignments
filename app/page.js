import Image from "next/image";
import Link from "next/link";
import TopBar from "./globalComponents/topBar";
import "./globals.css";

export default function Home() {
  return (
    <main className="monkeyCoverGif overflow-y-auto ">
      <div className="min-h-svh">
        <TopBar />
        <h1 className="text-5xl text-center text-black p-3 font-extrabold ">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <Link
          className="text-2xl bg-purple-200 text-black py-1 px-5 mx-6 border-2 border-black rounded-lg"
          href="/week-2"
        >
          Week - 2
        </Link>
        <Link
          className="text-2xl bg-purple-200 text-black py-1 px-5 mx-6 border-2 border-black rounded-lg"
          href="/week-3"
        >
          Week - 3
        </Link>
        <Link
          href="/week-4"
          className="text-2xl bg-purple-200 text-black py-1 px-5 mx-6 border-2 border-black rounded-lg"
        >
          Week - 4
        </Link>
        <Link
          href="/week-5"
          className="text-2xl bg-purple-200 text-black py-1 px-5 mx-6 border-2 border-black rounded-lg"
        >
          Week - 5
        </Link>
      </div>
    </main>
  );
}
