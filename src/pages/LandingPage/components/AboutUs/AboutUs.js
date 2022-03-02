import React from "react";

const AboutUs = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="font-semibold text-center py-8">About Us</h1>
      </div>

      <div className="md:grid grid-cols-6 gap-8">
        <div className="col-span-2 text-justify">
          IG Logistics is a part of IG International, India's leading fresh
          fruit importer for the since 1970 . From the farm to your table, or
          the factory to your wardrobe, IG Logistics is carrying everything and
          developing solutions that meet customer needs from one end of the
          supply chain to the other. With a strong desire to link people and
          goods through innovative and sustainable logistics solutions, we are
          shaping the world of logistics.With over 50 years of experience in
          international trade in fresh produce, no one knows the challenges of
          transporting fresh fruits and vegetables across continents and across
          varied climatic and temperature zones better than us. We go above and
          beyond every day to meet the demands of our customers. We enhance
          global trade and bring communities together by anticipating
          difficulties and applying our visionary mindset. And we have
          engineered technological solutions to keep the products fresh, safe
          and prime throughout the journey.
        </div>

        <div className="col-span-4 ">
          <video controls className="rounded-lg">
            <source src="/static/videos/igLog.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
