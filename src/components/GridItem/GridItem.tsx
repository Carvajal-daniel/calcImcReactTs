import type { Level } from "../../helpers/imc";

type Props = {
  item: Level;
};

import upImage from "../../assets/images/up.png";
import downImage from "../../assets/images/down.png";

export const GridItem = ({ item }: Props) => {
  return (
    <div
      style={{ backgroundColor: item.color }}
      className="flex cursor-pointer flex-1 flex-col items-center justify-center rounded-xl min-h-[320px] mb-6 md:h-auto shadow-lg p-6 shadow-zinc-700"
    >
      <div className="w-20 h-20 rounded-full bg-[rgba(0,0,0,.2)] bg-opacity-20 flex items-center justify-center shadow-md">
        <img
          src={item.icon === "up" ? upImage : downImage}
          alt="icon"
          width={35}
        />
      </div>

      <div className="mt-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{item.title}</h1>
      </div>

      {item.yourImc && (
        <div className="mt-4 mb-6 text-sm md:text-lg font-bold text-white bg-black bg-opacity-20 px-4 py-2 rounded-lg shadow-md">
          Seu IMC é: {item.yourImc} Kg/m²
        </div>
      )}

      <div className="mt-4 text-center text-sm md:text-base text-white font-medium bg-black bg-opacity-10 px-3 py-2 rounded-lg">
        IMC está entre: <span className="font-bold">{item.imc[0]} e {item.imc[1]}</span>
      </div>
    </div>
  );
};
