import Image from "next/image";
import Link from "next/link";
import TopBar from "./globalComponents/topBar";
import "./globals.css";

export default function Home() {
  return (
    <main className="monkeyCoverGif overflow-y-auto">
      <div className="min-h-svh">
        <TopBar />
        <h1 className="text-5xl text-center text-black p-3 font-extrabold">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="mx-5 flex flex-wrap justify-center">
          <Link
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
            href="/week-2"
          >
            Week - 2
          </Link>
          <Link
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
            href="/week-3"
          >
            Week - 3
          </Link>
          <Link
            href="/week-4"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 4
          </Link>
          <Link
            href="/week-5"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 5
          </Link>
          <Link
            href="/week-6"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 6
          </Link>
          <Link
            href="/week-7"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 7
          </Link>
          <Link
            href="/week-8"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 8
          </Link>
          <Link
            href="/week-10"
            className="text-2xl bg-purple-200 text-black py-1 px-5 m-3 border-2 border-black rounded-lg"
          >
            Week - 10
          </Link>
        </div>
      </div>
    </main>
  );
}
