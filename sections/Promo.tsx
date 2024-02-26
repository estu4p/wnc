import PromoCard from "@/components/PromoCard";
import { PROMO } from "@/constants";
import Link from "next/link";
import React from "react";

const Promo = () => {
  return (
    <section className="max-container mt-16">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl font-bold">Promo terbaik untuk anda</h2>
        <p className="lg:max-w-lg mt-2 text-gray-30">
          Kami memberikan banyak sekali promo terbaik setiap saat untuk dapat
          anda nikmati
        </p>
      </div>

      <Link
        className="flex justify-end mt-8 sm:mt-4 text-gray-50 font-semibold hover:text-gray-90 hover:font-bold"
        href={"/"}
      >
        Lihat Promo Lainnya
      </Link>

      <div className="mt-3 md:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-6">
        {/* promo card */}
        {PROMO.map((promo) => (
          <PromoCard key={promo.name} {...promo} />
        ))}
      </div>
    </section>
  );
};

export default Promo;
