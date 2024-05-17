import Image from "next/image";
import Link from "next/link";
import TopBar from "./globalComponents/topBar";

export default function Home() {
    return (
        <main className="bg-orange-200 h-screen ">
            <TopBar />
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <Link href="/week-2">Week - 2</Link>
        </main>
    );
}
