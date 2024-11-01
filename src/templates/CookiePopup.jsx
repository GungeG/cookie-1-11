"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import CookieButton from "../components/CookieButton";
import CookieText from "../components/CookieText";
import { useState } from "react";

const CookiePopup = () => {
  const [iscookiesaccepted, setiscookiesaccepted] = useState(false);
  const [cookieisclosed, setcookieisclosed] = useState(false);

  return (
  !iscookiesaccepted && !cookieisclosed && <section className={` flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl`}
    >
      <header className="flex justify-between">
        <LiaCookieBiteSolid size={50} />
        <IoIosClose onClick={() => setcookieisclosed (!cookieisclosed)} className="cursor-pointer" size={25} />
      </header>
      <footer className="flex flex-col">
        <CookieText />
        <CookieButton ctatext="2 like Cookies"
          action={setiscookiesaccepted}

        />
      </footer>
    </section>
  );
};

export default CookiePopup;


/*     <section
      className={`${
        acceptCookies && "hidden"
      } flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl`} */