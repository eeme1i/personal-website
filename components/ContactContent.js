import Link from "next/link";
import Image from "next/image";

function ContactContent() {
  return (
    <div className="text-font flex min-h-full w-full sm:justify-end">
      <div className=" bg-itembg my-8 w-full rounded-3xl p-8 text-4xl shadow-xl sm:relative md:my-0 md:w-2/3">
        <div className="w-full pb-4 text-4xl md:my-0 md:w-2/3">
          <h1>Contact</h1>
        </div>
        <div className="text-xl sm:flex sm:space-x-8">
          <div>
            <div className="mb-2">
              <Link href="https://twitter.com/hieemeli">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:underline"
                >
                  Twitter
                  <Image
                    src="/north_east_white_24dp.svg"
                    width="24px"
                    height="24px"
                  />
                </a>
              </Link>
            </div>
            <div className="mb-2">
              <Link href="https://github.com/eeme1i">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:underline"
                >
                  Github
                  <Image
                    src="/north_east_white_24dp.svg"
                    width="24px"
                    height="24px"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Link href="https://insagram.com/eemelihq">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:underline"
                >
                  Instagram
                  <Image
                    src="/north_east_white_24dp.svg"
                    width="24px"
                    height="24px"
                  />
                </a>
              </Link>
            </div>
            <div className="mb-2">
              <Link href="mailto:eeruoh@gmail.com">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:underline"
                >
                  Mail
                  <Image
                    src="/north_east_white_24dp.svg"
                    width="24px"
                    height="24px"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
