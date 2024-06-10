import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex justify-between">
      <div className="flex flex-col gap-10 justify-center m-auto content-start  ">
        <h1 className="text-8xl font-medium ">LOGIN</h1>
        <form className="flex flex-col gap-5">
          <input
            className="border-2 border-grey-900 rounded-md w-full h-12 p-2"
            type="text"
            placeholder="Username"
          />
          <input
            className="border-2 border-grey-900 rounded-md h-12 w-full p-2"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-black w-36 h-11 rounded text-slate-50 font-bold"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <div className="flex gap-5 items-center">
        <hr className="w-48 border-black"/><h3>OR</h3><hr className="w-48 border-black"/>
        </div>
        
        <div className="flex gap-9 justify-center">
          <FcGoogle className="scale-150" />
          <FaFacebook className="scale-150 text-blue-600" />
        </div>
        <p className="text-center text-slate-700 font-bold">Not yet registered, Click here to sign up</p>
      </div>
      <div className="flex">
        <img
          className="rounded-l-[200px] h-screen w-[40vw] object-cover"
          src="https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFycm90fGVufDB8fDB8fHww"
          alt="parrot"
        />
      </div>
    </main>
  );
}
