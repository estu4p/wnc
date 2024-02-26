import Hero from "@/sections/Hero";
import Promo from "@/sections/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <Promo />
      </section>
    </>
  );
}
