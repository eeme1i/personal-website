import Link from "next/link";

function PortfolioContent() {
    return (
    <div className='text-4xl w-full my-8 md:my-0 md:w-2/3'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="bg-blue-400 h-64"></div>
            <div className="bg-blue-400 h-64"></div>
            <div className="bg-blue-400"></div>
            <div className="bg-blue-400"></div>
        </div>
    </div>
    )
}

export default PortfolioContent