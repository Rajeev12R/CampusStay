import React, { useState, useEffect } from "react";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
<button onClick={toggleTheme} style={{ color: 'black', marginLeft: 10,marginRight: 10 }}>
  <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
</button>

  );
};

const Hero = () => {
  return (
    <div className="w-screen relative">
      <svg
        className="absolute inset-x-0 -bottom-1"
        viewBox="0 0 1160 163"
        preserveAspectRatio="none"
      >
        <path
          fill="#F0EFE9"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>
      <header className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 lg:mx-auto lg:flex-row lg:items-center">
        <a
          className="text-2xl font-bold text-gray-900 lg:text-3xl hover:text-gray-700"
          href="#"
        >
          Campus Stay
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="mx-auto flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0">
            <li className="lg:mr-12">
              <a className="text-gray-700 transition" href="#">
                Home
              </a>
            </li>
            <li className="lg:mr-12">
              <a className="text-gray-700 transition" href="#">
                Hostels
              </a>
            </li>
            <li className="lg:mr-12">
              <a className="text-gray-700 transition" href="#">
                PGs
              </a>
            </li>
            <li className="lg:mr-12">
              <a className="text-gray-700 transition" href="#">
                Mess Services
              </a>
            </li>
            <li className="lg:mr-12">
              <a className="text-gray-700 transition" href="#">
                Contact
              </a>
            </li>
          </ul>

          <a
            className="mt-4 block h-10 transform rounded-md border bg-gray-900 px-5 py-2 text-center text-sm capitalize text-white transition-colors duration-200 lg:mt-0 lg:ml-auto lg:w-auto hover:bg-gray-700"
            href="#"
          >
            Book Now
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <div className="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="mt-10 lg:max-w-lg">
            <p className="mb-4">— &nbsp;&nbsp; Campus Stay Services</p>
            <h1 className="font-[900] text-3xl text-gray-900 lg:text-5xl lg:leading-snug">
              Find the Best PGs & Hostels for Students
            </h1>

            <div className="mt-8 space-y-5 text-gray-600">
              Choose from a wide variety of PGs, hostels, and mess services
              around the campus. Book rooms before you arrive and secure a
              comfortable stay.
            </div>
          </div>

          <div className="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="m-1 h-12 flex-1 appearance-none rounded-lg border-none border-transparent bg-transparent bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:placeholder-transparent focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
              <button
                type="button"
                className="m-1 h-12 transform rounded-md bg-gray-900 px-4 py-2 text-white transition-colors duration-200 focus:bg-gray-700 focus:outline-none hover:bg-gray-700"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
          <div className="absolute z-10 lg:left-0">
            <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/src/assets/Rmq5nOvVkRXcJ4l-MnTfN.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block text-lg font-medium">
                  Rajeev Ranjan
                </strong>
                <span className="text-xs text-gray-400">
                  Has been our client for 4 years
                </span>
              </p>
            </div>
            <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
              <strong className="block text-lg font-medium">
                Site Analytics
              </strong>
              <div className="mt-4 flex items-center text-xs text-gray-400">
                Impressions
                <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                  <div className="h-full w-3/5 bg-yellow-200"></div>
                </div>
              </div>

              <div className="mt-4 flex items-center text-xs text-gray-400">
                Engagement
                <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                  <div className="h-full w-2/5 bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="-scale-x-100 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl"
            src="/src/assets/Rmq5nOvVkRXcJ4l-MnTfN.png"
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;