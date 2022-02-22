import Link from "next/link";
import Image from "next/image";

function IndexContent() {
  return (
    <div className="flex min-h-full w-full sm:justify-end">
      <div className="bg-Greener my-8 w-full rounded-3xl p-8 text-4xl sm:relative md:my-0 md:w-2/3">
        <div className="w-full pb-4 text-4xl md:my-0 md:w-2/3">
          <h1>Index</h1>
        </div>
        <div className="font-normal text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndexContent;
