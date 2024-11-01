"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import CookieConsentButton from "../components/CookieConsentButton";
import CookieConsentText from "../components/CookieConsentText";
import { useState } from "react";

const CookieConsentPopup = () => {
  const [acceptCookies, setAcceptCookies] = useState(false);

  return (<section className={`${acceptCookies && "hidden"} flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl`}
    >
      <header className="flex justify-between">
        <LiaCookieBiteSolid size={50} />
        <IoIosClose className="cursor-pointer" size={25} />
      </header>
      <footer className="flex flex-col">
        <CookieConsentText />
        <CookieConsentButton ctatext="2 like Cookies"
          test="Test string prop"
          action={setAcceptCookies}

        />
      </footer>
    </section>
  );
};

export default CookieConsentPopup;


/*     <section
      className={`${
        acceptCookies && "hidden"
      } flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl`} */