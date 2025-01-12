import { CheckBadgeIcon } from "@heroicons/react/24/solid";



const PricingCard = () => {
  const features = [
    "Acceso ilimitado al gimnasio",
    "Clases grupales incluidas",
    "Entrenador personal disponible",
    "Acceso a la app exclusiva",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-[20px] font-bold text-gray-800 mb-4">Plan Premium</h2>
      <p className="text-gray-600 mb-6">¡Todo lo que necesitas para tus metas!</p>
      <p className="text-[20px] font-bold text-green-600 mb-6">$39.99/mes</p>

      {/* Lista de beneficios */}
      <ul className="space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckBadgeIcon className="text-[8px] h-10 w-10 text-gray-500 mr-3" />
            <span className="text-[20px] text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700">
        ¡Elige este plan!
      </button>
    </div>
  );
};

export default PricingCard;
