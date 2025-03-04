export type Level = {
  title: string;
  color: string;
  icon: "up" | "down";
  imc: [number, number];
  yourImc?: number;
  description?: string; // Agregar descripción para cada nivel
}  

export const levels: Level[] = [
  { 
    title: "Magreza", 
    color: "#96A3AB", 
    icon: "down", 
    imc: [0, 18.5],
    description: "IMC abaixo de 18.5 indica magreza"
  },
  { 
    title: "Normal", 
    color: "#0EAD69", 
    icon: "up", 
    imc: [18.6, 24.9],
    description: "IMC entre 18.6 e 24.9 é considerado normal"
  },
  { 
    title: "Sobrepeso", 
    color: "#E2B039", 
    icon: "down", 
    imc: [25, 29.9],
    description: "IMC entre 25 e 29.9 indica sobrepeso"
  },
  { 
    title: "Obesidade", 
    color: "#C3423F", 
    icon: "down", 
    imc: [30, 99],
    description: "IMC acima de 30 indica obesidade"
  },
];

export const calculateIMC = (peso: number, altura: number): Level => {
  if (peso <= 0 || altura <= 0) {
    throw new Error("Peso e altura devem ser maiores que zero");
  }

  const imc = peso / (altura * altura);
  const level = levels.find(level => imc >= level.imc[0] && imc <= level.imc[1]);

  if (!level) {
    throw new Error("IMC fora do intervalo válido");
  }

  return { 
    ...level, 
    yourImc: Number(imc.toFixed(2)) // Usar Number en lugar de parseFloat
  };
};

// Función auxiliar para formatear el IMC
export const formatIMC = (imc: number): string => {
  return imc.toFixed(2);
};