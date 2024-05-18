import React from "react";
import StudentInfo from "./student-info";
import TopBar from "../globalComponents/topBar";

export default function Page() {
    return (
        <main className=" bg-gray-300 min-h-screen flex items-center flex-col  ">
            <TopBar />
            <h1 className="bg-yellow-600  text-4xl p-5 w-1/3 ">
                Shopping List
            </h1>
            <StudentInfo />
        </main>
    );
}
