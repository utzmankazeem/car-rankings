import React from "react";
import { Button } from "@/components/ui/button";
import gen1 from "@/assets/gen1.png";
import gen2 from "@/assets/gen2.png";

const Card: React.FC<{
  imgSrc: string;
  title: string;
  copy: string;
}> = ({ imgSrc, title, copy }) => {
  return (
    <div className="flex flex-col items-center text-left">
      <div className="h-[510px] w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
          {copy}
        </p>
      </div>
    </div>
  );
};

const PowerBeyondSection: React.FC = () => {
  return (
    <section aria-labelledby="power-beyond-heading" className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h3
            id="power-beyond-heading"
            className="text-2xl md:text-3xl font-heading font-bold text-gray-900"
          >
            Power Beyond the Road
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            At Car Rankings Brand, we don’t just move you forward — we keep you
            powered. Our range of generators delivers reliable energy for homes,
            businesses, and outdoor adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card
            imgSrc={gen1}
            title="Diesel Generator"
            copy="Strong, steady, and dependable. Diesel generators continue to power industries and businesses worldwide, offering the perfect blend of reliability and cost-effectiveness."
          />
          <Card
            imgSrc={gen2}
            title="Standby Electric Powerplant Generator"
            copy ="Seamless standby power designed to keep your world moving. Whether at home or in business, our standby electric powerplant generators deliver consistent energy when the unexpected happens."
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="rounded-md px-10 py-2 bg-white border border-black hover:shadow-md text-black hover:text-white">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PowerBeyondSection;
