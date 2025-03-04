import { useState } from "react";
import { levels, calculateIMC } from "./helpers/imc";
import { GridItem } from "./components/GridItem/GridItem";
import leftArrow from './assets/images/leftarrow.png';

let stylesInput = "border-b disabled:opacity-39 w-full border-gray-300 py-3 px-1 mb-8 outline-none";

function App() {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [showItem, setShowItem] = useState<null>(null);

  const handleCalculate = () => {
    if (peso && altura) {
      setShowItem(calculateIMC(peso, altura));
    } else {
      alert("Preencha os campos corretamente");
    }
  };

  const handleBack = () => {
    setShowItem(null);
    setAltura(0);
    setPeso(0);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="container mx-auto py-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-700 rounded p-4 w-20 h-8 tracking-wide flex items-center justify-center">
            <h1 className="font-bold text-xl">IMC</h1>
          </div>
          <p className="text-sm md:text-base">Powered by <strong className="text-lg">Daniel Carvajal</strong></p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row md:ml-4 md:gap-10">
        <div className="flex-1 -mt-6 flex flex-col justify-center h-[calc(100vh-8rem)]">
          <h1 className="text-4xl md:text-6xl mt-16 mb-8 font-medium tracking-widest text-center md:text-left">
            Calcule o seu IMC.
          </h1>
          <p className="text-zinc-300 mb-8 tracking-widest w-full md:w-[85%] text-lg md:text-base text-center md:text-left">
            IMC é a sigla para Índice de Massa Corpórea. Parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <div className="w-full md:w-[80%]">
            <input
              className={stylesInput}
              type="number"
              placeholder="Digite sua altura. EX: 1.5 (em metros)"
              value={altura > 0 ? altura : ""}
              onChange={(e) => setAltura(parseFloat(e.target.value))}
              disabled={showItem ? true : false}
            />

            <input
              className={stylesInput}
              type="number"
              placeholder="Digite seu peso. EX: 60.3 (em kg)"
              value={peso > 0 ? peso : ""}
              onChange={(e) => setPeso(parseFloat(e.target.value))}
              disabled={showItem ? true : false}
            />
          </div>
          <button
            className="w-full md:w-[80%] text-lg disabled:opacity-20 tracking-widest bg-blue-700 text-white py-3 rounded mt-8"
            onClick={handleCalculate}
            disabled={showItem ? true : false}
          >
            Calcular
          </button>
        </div>

        <div className="flex-1 flex flex-col mt-12 md:mt-48 h-auto md:h-[480px] w-full justify-center">
          {!showItem ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex-1 flex w-full md:w-[500px] relative">
              <GridItem item={showItem} />
              <div 
                onClick={handleBack}
                className="absolute bg-[#227C9D] cursor-pointer hover:scale-105 transition-all hover:bg-blue-400 rounded-full flex items-center justify-center h-16 w-16 md:h-20 md:w-20 left-0 md:-ml-8 md:mt-50">
                <img src={leftArrow} alt="leftArrow" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
