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
    !iscookiesaccepted && !cookieisclosed && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <section
          className="relative flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl z-50"
          style={{ maxWidth: '90%' }}
        >
          <header className="flex justify-between">
            <LiaCookieBiteSolid size={50} />
            <IoIosClose
              onClick={() => setcookieisclosed(!cookieisclosed)}
              className="cursor-pointer"
              size={25}
            />
          </header>
          <footer className="flex flex-col">
            <CookieText />
            <CookieButton
              ctatext="2 like Cookies"
              action={setiscookiesaccepted}
            />
          </footer>
        </section>
      </div>
    )
  );
};

export default CookiePopup;