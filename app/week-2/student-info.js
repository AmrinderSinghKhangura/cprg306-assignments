//student info component that displays name and github link

import React from "react";

const StudentInfo = () => {
    return (
        <div className="bg-cyan-700 p-5 flex flex-col items-center">
            <h1 className="m-6 bg-purple-300 ">Amrinder Singh Khangura</h1>
            <h2>
                <a
                    className="bg-lime-400 p-2 m-2"
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
