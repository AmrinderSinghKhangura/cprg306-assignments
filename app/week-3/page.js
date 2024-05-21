import TopBar from "../globalComponents/topBar";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <TopBar />
            <h1 className="text-5xl text-white p-3 font-extrabold ">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );
}
