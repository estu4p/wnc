import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mb-40 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}

      {/* left */}
      <div className="relative z-20 flex flex-1 lg:-mt-10 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Wash & Care</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan
          perawatan secara profesional, dengan teknik khusus, serta menggunakan
          alat dan bahan premium untuk melakukan perawatan.
        </p>

        {/* <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div> */}

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-16">
          <Button type="button" title="Pesan Sekarang" variant="btn_blue" />
          <Button type="button" title="Galeri Kami" variant="btn_white_text" />
        </div>
      </div>

      {/* right */}
      <div className="relative flex flex-1 items-start">
        <div className="absolute z-20 rounded-3xl p-4 bg-green-90 -top-14 -left-3 sm:-top-16 sm:left-56 sm:py-4 md:px-7 md:py-8 lg:left-72 xl:-top-14 xl:-left-24 min-[1400px]:left-0 md:w-[268px]">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokasi</p>
              <Image
                src="/icons/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Bantul, Yogyakarta</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 right-5 w-60 min-[470px]:w-64 sm:w-64 md:w-72 lg:w-[320px] sm:bottom-10 lg:right-44 lg:-bottom-16 xl:w-[350px] xl:right-32 xl:top-4">
        <Image
          src={"/images/img-hero.png"}
          alt="img-hero"
          width={350}
          height={320}
          className="bg-blue-300 border-4 border-black"
        />
      </div>

      {/* <div className="relative flex flex-1 items-start">
        <div className="absolute left-0 top-0 lg:-top-14 lg:-left-24 z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokasi</p>
              <Image
                src="/icons/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Bantul, Yogyakarta</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
