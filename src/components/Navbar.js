import { Menu, Transition } from "@headlessui/react";

export default function Navbar({ pages, setHome, className }) {
  return (
    <header>
      <div className={"fixed w-screen " + className + " ease-out duration-300"}>
        <nav>
          <div className="px-4 bg-gray-900">
            <div className="flex justify-between md:justify-center">
              <div className="flex flex-space space-x-7 w-full">
                <a href="/" className="flex items-center py-2 px-2">
                  <img
                    className="h-12 w-12 my-2 mr-2 text-blue-400"
                    src="./PC.svg"
                    alt="Logo"
                  />
                  <h1 className="hidden lg:inline-flex text-2xl font-semibold text-blue">
                    Computer&nbsp;<span className="text-red">Paradise</span>
                  </h1>
                </a>

                <div className="hidden md:flex w-full justify-end items-center space-x-1 px-6">
                  {pages.map((page) => (
                    <LinkLarge
                      key={page.name}
                      name={page.name}
                      isActive={page.isActive}
                      handleClick={setHome}
                    />
                  ))}
                </div>
                <Hamburger pages={pages} setHome={setHome} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function LinkLarge(props) {
  const clas = props.isActive
    ? "text-blue-500 border-b-4 border-blue-500"
    : "text-gray-500 hover:text-blue-500 transition duration-300";
  return (
    <button
      onClick={() => props.handleClick(props.name)}
      className={"my-4 pb-1 px-2 font-semibold " + clas}
    >
      {props.name}
    </button>
  );
}

function Hamburger({ pages, setHome }) {
  return (
    <Menu>
      <div className="w-full flex justify-end items-center md:hidden">
        <Menu.Button>
          <svg
            className="w-8 h-8 text-blue-500"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h14M4 18h16"></path>
          </svg>
        </Menu.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="scale-90 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-100 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-90 opacity-0"
        >
          <Menu.Items>
            <div
              className={`absolute top-14 right-5 bg-gray-600 p-6 shadow-2xl rounded-lg mobile-menu`}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  name={page.name}
                  isActive={page.isActive}
                  handleClick={setHome}
                />
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}

function Link(props) {
  const cls = props.isActive
    ? "text-gray-800 bg-blue-500 font-semibold hover:bg-blue hover:text-gray"
    : "text-blue-500 hover:bg-blue";
  return (
    <Menu.Item>
      <button
        onClick={() => props.handleClick(props.name)}
        className={
          "w-full rounded-lg my-2 block text-sm px-2 py-4 " +
          cls +
          " transition duration-300"
        }
      >
        {props.name}
      </button>
    </Menu.Item>
  );
}
