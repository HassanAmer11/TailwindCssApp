import React, { useState } from "react";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

export default function Portfolio() {
  const [imgHolder, setImgHolder] = useState(port1);
  const [isOpen, setOpen] = useState(false);

  function showImage(imgSrc) {
    setImgHolder(imgSrc);
    setOpen(true);
  }
  function hideImage() {
    setOpen(false);
  }
  return (
    <>
      <section className="text-center pt-10">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl">portfolio component</h2>
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
     

        <div className="py-4">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port1);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port1} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port2);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port2} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port3);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port3} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port1);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port1} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port2);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port2} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 sm:w-1/2 w-full">
                <div
                  className="group p-6"
                  onClick={() => {
                    showImage(port3);
                  }}
                >
                  <div className="inner rounded-2xl overflow-hidden relative">
                    <img src={port3} className="w-full block" alt="..." />
                    <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-second/80 group-hover:opacity">
                      <div className="flex justify-center items-center h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-30 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`min-h-screen z-50 fixed top-0 bottom-0 start-0 end-0 bg-blue-800/25  ${
            !isOpen && "hidden"
          }`}
          onClick={(e) => {
            hideImage(e);
          }}
        >
          <div className="flex h-full justify-center items-center">
            <div className="sm:w-8/12 md:w-5/12 w-11/12">
              <img
                alt="..."
                className="w-full block"
                src={imgHolder}
                onClick={(e) => {
                  e.stopPropagation(); // ✨ prevent closing when clicking image
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
