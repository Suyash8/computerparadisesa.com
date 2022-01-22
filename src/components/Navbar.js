import LinkLarge from "./navbar/LinkLarge";
import Hamburger from "./navbar/Ham";

export default function Navbar({ pages, setHome }) {
  return (
    <header>
      <div className="">
        <nav>
          <div className="px-4 bg-gray-900">
            <div className="flex justify-between md:justify-center">
              <div className="flex flex-space space-x-7 w-full">
                <a href="/" className="flex items-center py-2 px-2">
                  <img
                    className="h-12 w-12 mr-2 text-blue-400"
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
