import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen xl:gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center mt-16 items-start w-full max-xl:padding-x pt-28">
        {/* <Image
          src="/icons/icon-shoe.png"
          alt="icon sepatu hero"
          width={144}
          height={68}
          className="absolute top-[45px] left-1 z-20 transform -rotate-12"
        /> */}
        {/* cleanless your shoes is bullshit */}

        {/* Left */}
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          {/* <h2 className="text-2xl font-bold mb-5 text-blue-500">
            The Cleanless of your shoes <br /> is part of your faith
          </h2> */}
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Wash & Care
          </span>
        </h1>
        <p className="text-gray-30 text-lg leading-8 mt-6 mb-14 ">
          Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan
          perawatan secara profesional, dengan teknik khusus, serta menggunakan
          alat dan bahan premium untuk melakukan perawatan.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row ">
          <Button type="button" title="Pesan Sekarang" variant="btn_blue" />
          <Button type="button" title="Galeri Kami" variant="btn_white_text" />
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"></div>
      </div>

      {/* right */}
      <div className="relative flex-1 flexCenter xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <Image
          src="/images/img-hero2.png"
          alt="image hero"
          width={610}
          height={502}
          className="object-contain drop-shadow-2xl relative z-10"
        />
        {/* Lokasi */}
        <div className="absolute bottom-10 right-20 flex flex-1 items-start">
          <div className=" z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-6">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-20 text-gray-20">Lokasi</p>
                <Image
                  src="/icons/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </div>
              <p className="bold-20 text-white mt-1">Sleman, Yogyakarta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
