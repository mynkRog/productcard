import d from "./assets/d.jpg";
import { BsCart3 } from "react-icons/bs";
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F3EAE3]">
      <div className="w-[20rem] h-[35rem] md:h-[27rem] md:w-[40rem] flex flex-col md:flex-row bg-white rounded-2xl">
        <div className="h-1/3 rounded-2x md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover rounded-t-2xl md:rounded-r-none md:rounded-bl-2xl"
            src={d}
            alt=""
          />
        </div>
        <div className="h-2/3 md:h-full md:w-1/2 md:p-8 md:gap-4 flex flex-col gap-3 p-4 ">
          <h1 className="font-montserrat text-gray-500 tracking-[.3rem]">
            PERFUME
          </h1>
          <h1 className="font-fraunces mx-1 md:w-[10rem] font-extrabold text-3xl">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-montserrat text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <span className="flex gap-3 items-center font-montserrat">
            <h1 className="text-[#3D8168] font-extrabold text-3xl">$149.99</h1>
            <h1 className="text-gray-500 text-lg line-through ">$169.99</h1>
          </span>
          <button className="flex items-center justify-center font-bold gap-2 bg-[#3D8168] rounded-lg p-3 text-white">
            <BsCart3 />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
