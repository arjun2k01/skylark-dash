import { Menu } from "@headlessui/react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 font-bold text-xl">
          <img
            src="/Skylark-HR-Solutions-removebg-preview (1).png"
            width="200"
            height="200"
            alt="Skylark logo"
          />
        </span>
        <span className="text-gray-600"></span>
      </div>

      {/* Responsive Menu */}
      <div className="lg:hidden">
        <Menu as="div" className="relative">
          <Menu.Button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-600">☰</span> {/* Hamburger icon */}
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="flex flex-col space-y-2">
              <a href="/home" className="px-4 py-2 hover:bg-gray-100">
                Home
              </a>
              <a href="/addcandidate" className="px-4 py-2 hover:bg-gray-100">
                Add Candidate
              </a>
              <a href="/pre-schedule" className="px-4 py-2 hover:bg-gray-100">
                Pre-Schedule
              </a>
              <a href="/post-schedule" className="px-4 py-2 hover:bg-gray-100">
                Post-Schedule
              </a>
              <a href="/user" className="px-4 py-2 hover:bg-gray-100">
                User
              </a>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <a href="/home" className="text-gray-600 hover:text-blue-600">
          Home
        </a>
        <a href="/addcandidate" className="text-gray-600 hover:text-blue-600">
          Add Candidate
        </a>
        <a href="/pre-schedule" className="text-gray-600 hover:text-blue-600">
          Pre-Schedule
        </a>
        <a href="/post-schedule" className="text-gray-600 hover:text-blue-600">
          Post-Schedule
        </a>
        <a href="/user" className="text-gray-600 hover:text-blue-600">
          User
        </a>
      </div>
    </header>
  );
};

export default Header;
