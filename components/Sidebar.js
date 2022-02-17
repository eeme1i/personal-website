import Link from "next/link";

function Sidebar() {
  return (
    <div className="static m-auto mt-0 flex w-full justify-center rounded-3xl bg-gray-900 p-8 md:fixed md:block md:w-1/4 lg:w-1/4 xl:w-1/5">
      <div className="md:mb-4">
        <Link href="/">
          <a className="rounded-lg px-4 transition-all duration-150 ease-linear hover:bg-gray-800 hover:py-2">
            Index
          </a>
        </Link>
      </div>
      <div className="md:mb-4">
        <Link href="/portfolio">
          <a className="rounded-lg px-4 transition-all duration-150 ease-linear hover:bg-gray-800 hover:py-2">
            Portfolio
          </a>
        </Link>
      </div>
      <div className="">
        <Link href="/contact">
          <a className="rounded-lg px-4 transition-all duration-150 ease-linear hover:bg-gray-800 hover:py-2">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
