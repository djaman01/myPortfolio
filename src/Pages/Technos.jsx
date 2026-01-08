import { reactLogo } from "../assets/images/logo";
import Header from "../Components/Header";

const Technos = () => {
  return (
    <>
      <div className="mt-2">
        <Header />
      </div>

      {/* Page container */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        {/* Card */}
        <div className="relative w-44 h-44 rounded-2xl bg-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
          {/* Glow effect behind the logo */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>

          {/* React logo */}
          <img src={reactLogo} alt="React Logo" className="w-28 h-28 z-10" />
        </div>
      </div>
    </>
  );
};

export default Technos;
