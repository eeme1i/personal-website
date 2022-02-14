import Link from "next/link";

function Sidebar() {
    return (
        <div className='w-full md:w-2/4 xl:w-1/4 flex md:block bg-gray-900 rounded-3xl p-8 m-auto justify-center mt-0'>
          <div className='md:mb-4'>
            <Link href='/'>
            <a className='px-4 hover:py-2 rounded-lg hover:bg-gray-800 transition-all duration-150 ease-linear'>Index</a>
            </Link>
          </div>
          <div className='md:mb-4'>
            <Link href='/portfolio'>
            <a className='px-4 hover:py-2 rounded-lg hover:bg-gray-800 transition-all duration-150 ease-linear'>Portfolio</a>
            </Link>
          </div>
          <div className=''>
            <Link href='/contact'>
            <a className='px-4 hover:py-2 rounded-lg hover:bg-gray-800 transition-all duration-150 ease-linear'>Contact</a>
            </Link>
          </div>
      </div>
    )
}

export default Sidebar