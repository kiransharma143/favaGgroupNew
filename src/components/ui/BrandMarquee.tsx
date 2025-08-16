import React from "react";

const brands: string[] = [
  "/images/ShilpanBeverages.png",
  "/images/Savarflavor.png",
  "/images/mrmunchido.png",
  "/images/TopCookSuperFlow.png",
  "/images/ToopCookGold.png",
  "/images/DandiNamak.png",
  "/images/Annapurna.png",
  "/images/CaptainCook.png",
  "/images/bonn.png",
  "/images/Americana.png",
  "/images/Mingmagic.png",
  "/images/Kiz.png",
  "/images/JhimRiceMill.png",
  "/images/Jasmer.png",
  "/images/RoyalKing.png",
  "/images/CrownBasmatiRice.png"
];

const BrandsMarquee: React.FC = () => {
  return (
    <section className="brands-marquee  bg-white">
      <div className="container mx-auto px-4">
        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
            {brands.concat(brands).map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`brand-${index}`}
                className="w-24 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline style for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 120s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default BrandsMarquee;
