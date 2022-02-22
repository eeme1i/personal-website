import Link from "next/link";
import Image from "next/image";

function IndexContent() {
  return (
    <div className="flex min-h-full w-full sm:justify-end">
      <div className="bg-itembg my-8 w-full rounded-3xl p-8 text-4xl shadow-xl sm:relative md:my-0 md:w-2/3">
        <div className="w-full pb-4 text-4xl md:my-0 md:w-2/3">
          <h1>Hi there!</h1>
        </div>
        <div className="text-xl font-normal">
          <p>
            Hello, I'm Eemeli, a second year student at{" "}
            <a
              href="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio"
              target="_blank"
              className="cursor-pointer hover:underline"
            >
              Porin Lukio
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndexContent;
