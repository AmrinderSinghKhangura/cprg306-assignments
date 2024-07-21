"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "../globalComponents/topBar";
import { useUserAuth } from "./_utils/auth-context";

const Week8Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list/");
    }
  }, [user, router]);

  return (
    <main className="bg-cyan-200 h-screen">
      <TopBar />
      <div className="flex justify-center flex-col items-center">
        <p className="text-black text-3xl m-7">
          Welcome, please sign in to access your shopping list.
        </p>
        <button
          className="bg-gray-700 hover:bg-green-950 p-4 rounded-xl"
          onClick={gitHubSignIn}
        >
          Sign in using GitHub
        </button>
      </div>
    </main>
  );
};

export default Week8Page;
