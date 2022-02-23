import Link from "next/link";

function PortfolioContentB() {
  return (
    <div className="z-1 flex min-h-full w-full justify-end pb-8">
      <div className="relative my-8 w-full rounded-3xl bg-itembg p-8 text-4xl shadow-md md:my-0 md:w-2/3">
        <div className="flex w-full items-center justify-between pb-8 text-4xl md:my-0">
          <h1>Portfolio</h1>
          <div className="flex items-center space-x-2">
            <div className="rounded-lg p-2 transition-all duration-150 ease-linear hover:bg-highlight">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/eemelihq"
              >
                <a className="">
                  <img
                    className="h-7 w-auto"
                    src="/Instagram_simple_icon.svg"
                  />
                </a>
              </Link>
            </div>
            <div className="items-center rounded-lg p-2 transition-all duration-150 ease-linear hover:bg-highlight">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/hieemeli"
              >
                <a className="">
                  <img
                    className="h-6 w-auto"
                    src="/Twitter_bird_logo_2012.svg"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-lg text-white sm:text-2xl">
          <Link href="https://www.instagram.com/p/CZmcNyZsuqG/">
            <a target="_blank" rel="noreferrer" className="h-full w-full">
              <div className="mb-8 h-96 w-full rounded-3xl bg-[url('/01.jpg')] bg-cover bg-center">
                <div className="h-full w-full rounded-3xl bg-imagehover/[0.6] opacity-0 transition-all duration-150 ease-linear hover:opacity-100">
                  <div className="flex justify-between p-8">
                    <p className="">01.png</p>
                    <p>2022</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://www.instagram.com/p/CZWjjAJNbw4/">
            <a target="_blank" rel="noreferrer" className="h-full w-full">
              <div className="mb-8 h-96 rounded-3xl bg-[url('/02.jpg')] bg-cover bg-center">
                <div className="h-full w-full rounded-3xl bg-imagehover/[0.6] opacity-0 transition-all duration-150 ease-linear hover:opacity-100">
                  <div className="flex justify-between p-8">
                    <p className="">s-4-pro.png</p>
                    <p>2022</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://www.instagram.com/p/CYrOamxMLKq/">
            <a target="_blank" rel="noreferrer" className="h-full w-full">
              <div className="h-96 rounded-3xl bg-[url('/03.jpg')] bg-cover bg-center">
                <div className="h-full w-full rounded-3xl bg-imagehover/[0.6] opacity-0 transition-all duration-150 ease-linear hover:opacity-100">
                  <div className="flex justify-between p-8">
                    <p className="">Vendetta</p>
                    <p>2022</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <div className="flex w-full justify-center pt-6 text-sm text-font">
            <p>more coming soon :)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContentB;
