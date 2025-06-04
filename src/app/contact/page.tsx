import style from "@/css/bg-image.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-130 bg-rose-200 text-stone-950">
      <div className="font-Serif text-center p-5 mb-6">
        <h1 className="font-bold text-3xl">How can we help you?</h1>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 text-center">
        <div className="bg-zinc-50 p-10">
          <svg
            className="w-6 h-6 text-gray-800 m-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clipRule="evenodd"
            />
          </svg>

          <h2>our main office</h2>
          <p>SoHo 94 Broadway St New York, NY 1001</p>
        </div>
        <div className="bg-zinc-50 p-10">
          <svg
            className="w-6 h-6 text-gray-800 m-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>

          <h2>phone number</h2>
          <p>234-9876-5400 888-0123-4567 (Toll Free)</p>
        </div>
        <div className="bg-zinc-50 p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
            className="bg-gray-800 m-auto"
          >
            <path d="M200-120q-50 0-85-35t-35-85v-280q0-50 35-85t85-35q27 0 49.5 11t39.5 29h31v-200h400v200h40q50 0 85 35t35 85v320H289q-17 18-39.5 29T200-120Zm0-80q17 0 28.5-11.5T240-240v-280q0-17-11.5-28.5T200-560q-17 0-28.5 11.5T160-520v280q0 17 11.5 28.5T200-200Zm200-400h240v-120H400v120Zm-80 360h480v-240q0-17-11.5-28.5T760-520H320v280Zm280-160q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480q-17 0-28.5 11.5T560-440q0 17 11.5 28.5T600-400Zm120 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400ZM600-280q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280Zm120 0q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-360 0h160v-200H360v200Zm-40 40v-280 280Z" />
          </svg>
          <h2>Fax</h2>
          <p>1-234-567-8900</p>
        </div>
        <div className="bg-zinc-50 p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
            className="bg-gray-800 m-auto"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <h2>Email</h2>
          <Link href={"#"} className="border-b text-indigo-600">
            hello@theme.com
          </Link>
        </div>
      </div>
    </div>
  );
}
