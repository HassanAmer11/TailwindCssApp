import React from "react";

export default function Contact() {
  return (
    <>
      <section className="min-h-[inherit] flex justify-center items-center pt-6">
        <div className="container">
          <div className="text-center pt-4">
            <h2 className="uppercase font-bold text-2xl sm:text-3xl">conatct section</h2>
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />{" "}
              </svg>
            </div>
          </div>
          <div className="flex mt-5 justify-center">
            <div className="md:w-7/12 w-10/12">
              <form className="flex flex-col gap-5">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b border-[#dee2e6] rounded-sm border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="text-gray-500 absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    User Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_age"
                    id="floating_age"
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b border-[#dee2e6] border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_age"
                    className="text-gray-500 absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    User Age
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b border-[#dee2e6] border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="text-gray-500 absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b border-[#dee2e6] border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="text-gray-500 absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>
                <button
                  type="button"
                  className="text-white bg-second box-border border border-transparent rounded-sm text-sm shadow-xs font-medium px-12 py-2 w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
