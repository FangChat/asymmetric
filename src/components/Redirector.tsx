"use client";
import { RedirectProps } from "@/utils/types";

export default function Redirector(props: RedirectProps){

    const handleRegister = () => {
        window.open("/register");
      }

    return (
      <button className="p-2 mr-10 text-white text-xl hover:bg-carribean-current hover:animate-shrink rounded-2xl border-white border-2 border-solid font-techFont normal-case" onClick={handleRegister}>
        <h6>{props.text}</h6>
      </button>
    );

}