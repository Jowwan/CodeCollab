import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 w-full text-slate-300 pt-14 pb-10 flex justify-center items-center">
      <div className="w-96">
        <nav className="flex justify-around items-center mb-8">
          <a
            className="cursor-pointer hover:text-cyan-500 transition-all duration-500"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-cyan-300 transition-all duration-500"
            href="https://github.com/Jowwan"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.238-.008-.868-.013-1.704-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.272.098-2.653 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.545 1.381.202 2.4.099 2.653.64.699 1.03 1.591 1.03 2.682 0 3.842-2.337 4.685-4.565 4.932.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.745 0 .268.18.579.688.481A10.014 10.014 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-cyan-300 transition-all duration-500"
            href="https://www.instagram.com/jovanw_/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17.5 5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
            </svg>
          </a>
        </nav>
        <nav className="flex justify-between mb-8">
          <a
            className="link link-hover cursor-pointer hover:text-slate-500 transition-all duration-300"
            href="#"
          >
            About us
          </a>
          <a
            className="link link-hover cursor-pointer hover:text-slate-500 transition-all duration-300"
            href="#"
          >
            Contact
          </a>
          <a
            className="link link-hover cursor-pointer hover:text-slate-500 transition-all duration-300"
            href="#"
          >
            Jobs
          </a>
          <a
            className="link link-hover cursor-pointer hover:text-slate-500 transition-all duration-300"
            href="#"
          >
            Donate
          </a>
        </nav>
        <aside className="text-center">
          <p>© {new Date().getFullYear()} CodeCollab</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
