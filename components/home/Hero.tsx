const BANNER_URL =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1785919605/ChatGPT_Image_5_ao%C3%BBt_2026_09_40_39_zws2jj.png";
const BANNER_URL_MOBILE =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1785921284/ChatGPT_Image_5_ao%C3%BBt_2026_10_14_35_irebgp.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 to-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
        <picture>
          <source media="(max-width: 639px)" srcSet={BANNER_URL_MOBILE} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BANNER_URL}
            alt="Bayti Pack"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
}
