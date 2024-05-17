const { default: Link } = require("next/link");

const TopBar = () => {
    return (
        <div className="bg-black w-screen p-1 flex flex-row justify-between">
            <Link className="text-3xl" href="/">
                Home
            </Link>
            <div className="text-3xl">Amrinder Singh Khangura</div>
        </div>
    );
};

export default TopBar;
