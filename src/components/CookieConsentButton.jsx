"use client";

const CookieConsentButton = ({ctatext, action}) => {
  return (
    <button
      onClick={() => action(true)}
      className={` p-3 text-lg text-black rounded-lg h-15 bg-slate-50`}
    >
      {ctatext}
    </button>
  );
};

export default CookieConsentButton;
