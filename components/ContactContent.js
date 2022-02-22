import Link from "next/link";
import Image from "next/image";

function ContactContent() {
  return (
    <div className="text-font flex min-h-full w-full sm:justify-end">
      <div className=" bg-itembg my-8 w-full rounded-3xl p-8 text-4xl shadow-md sm:relative md:my-0 md:w-2/3">
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
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
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
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Link href="https://instagram.com/eemelihq">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:underline"
                >
                  Instagram
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
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
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    ></path>
                  </svg>
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
