import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mb-40 max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row">
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

      {/* Lokasi */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
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

      {/* <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
