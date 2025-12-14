import React from "react";
import avatar from "../../assets/images/avataaars.svg";
export default function Home() {
  return (
    <>
      <section className="min-h-[inherit] bg-second text-white flex flex-col justify-center items-center">
        <div className="w-[230px] aspect-square">
          <img src={avatar} alt="..." className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl">start Framework</h2>
          <div
            className="inline-block px-3 relative after:absolute after:top-4/10 after:left-1/1 after:w-20 after:border-2 
          before:absolute before:top-4/10 before:right-1/1 before:w-20 before:border-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
