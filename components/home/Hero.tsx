import Image from "next/image";

const BANNER_URL =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1785919605/ChatGPT_Image_5_ao%C3%BBt_2026_09_40_39_zws2jj.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 to-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image src={BANNER_URL} alt="Bayti Pack" fill priority sizes="100vw" className="object-cover" />
      </div>
    </section>
  );
}
