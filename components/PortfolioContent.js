import Link from "next/link";

function PortfolioContent() {
  return (
    <div className="z-1 flex min-h-full w-full sm:justify-end">
      <div className="bg-Greener my-8 w-full rounded-3xl p-8 text-4xl sm:relative md:my-0 md:w-2/3">
        <div className="w-full pb-8 text-4xl md:my-0 md:w-2/3">
          <h1>Portfolio</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
          <div className="mb-4 h-64 bg-blue-400"></div>
          <div className="mb-4 h-64 bg-blue-400"></div>
          <div className="mb-4 h-64 bg-blue-400"></div>
          <div className="mb-4 h-64 bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
