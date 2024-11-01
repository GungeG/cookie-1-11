"use client";

const CookieButton = ({ctatext, action}) => {
  return (
    <button
      onClick={() => action(false)}
      className={` p-3 text-lg text-black rounded-lg h-15 bg-slate-50`}
    >
      {ctatext}
    </button>
  );
};

export default CookieButton;
