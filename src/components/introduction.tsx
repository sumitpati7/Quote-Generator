export default function Introduction() {
  return (
    <div className="flex flex-col justify-center items-center rounded-[45px] bg-white p-[100px] shadow-md mt-[70px]">
      <h2 className="text-[65px] font-extrabold font-mono text-primary">
        Discover Inspiration Anytime
      </h2>
      <p className="text-[30px] font-semibold mt-4 text-primary">
        Access a vast library of quotes in various genres
      </p>
      <a
        href="#generate"
        className="mt-9 font-medium bg-purple-900 text-white px-4 py-3 rounded-lg border border-purple-900 transition-colors duration-500 hover:bg-gray-100 hover:text-purple-900 hover:font-semibold"
      >
        Start Generating <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}
