import React from "react";

type PromoCardProps = {
  imgUrl: string;
  name: string;
  desc: string;
};

const PromoCard = ({ imgUrl, name, desc }: PromoCardProps) => {
  return (
    <div className="rounded-xl shadow-lg">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden max-h-60 bg-cover bg-center">
          <img src={imgUrl} alt={name} />
        </div>
        <h4 className="text-xl md:text-2xl font-bold mt-3">{name}</h4>
        <p className="text-gray-30 text-sm md:text-base mt-1 h-24 overflow-auto">
          {desc}
        </p>
        <button className="text-center bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-400 focus:scale-95 transition-all duration-200 ease-out">
          Lihat Promo
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
