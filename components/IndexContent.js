import Link from "next/link";
import Image from "next/image";

function IndexContent() {
  return (
    <div className="flex min-h-full w-full sm:justify-end">
      <div className="bg-itembg my-8 w-full rounded-3xl p-8 text-4xl shadow-md sm:relative md:my-0 md:w-2/3">
        <div className="w-full pb-4 text-4xl md:my-0 md:w-2/3">
          <h1>Hi there!</h1>
        </div>
        <div className="h-full w-full text-xl font-normal">
          <p className="pb-4">
            Hello! I&apos;m Eemeli, a second year student at{" "}
            <a
              href="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-bold hover:underline"
            >
              Porin Lukio
            </a>
            .
          </p>
          <p className="pb-4">
            Alongside my studies I like enjoy tinkering around with graphic
            design. You can find some of my work at the{" "}
            <Link href="/portfolio">
              <a className="font-bold hover:underline">portfolio </a>
            </Link>
            section.
          </p>
          <p className="pb-4">
            I also enjoy playing around with web design! Some of my projects are{" "}
            <a
              href="https://MEK-JS.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-bold hover:underline"
            >
              MEK-JS{" "}
            </a>
            &{" "}
            <a
              href="https://porinlukio.fi"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-bold hover:underline"
            >
              porinlukio.fi
            </a>
            .
          </p>
          <p className="pb-4">
            If you'd like to get in touch you can find ways to reach out to me
            at{" "}
            <Link href="/contact">
              <a className="font-bold hover:underline">contact</a>
            </Link>
            !
          </p>
          <img
            className="h-8"
            src="https://emojicdn.elk.sh/%E2%9C%A8?style=apple"
          />
        </div>
      </div>
    </div>
  );
}

export default IndexContent;
