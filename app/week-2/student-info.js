//student info component that displays name and github link

import React from "react";

const StudentInfo = () => {
    return (
        <div className="p-5 flex flex-col items-center">
            <h1 className="m-6 bg-purple-200 text-black rounded-lg p-1 ">
                Amrinder Singh Khangura
            </h1>
            <h2>
                <a
                    className="bg-lime-400 p-2 m-2 text-black border-2 border-black rounded-lg"
                    href="https://github.com/AmrinderSinghKhangura"
                    target="blank"
                >
                    Github
                </a>
            </h2>
        </div>
    );
};

export default StudentInfo;
