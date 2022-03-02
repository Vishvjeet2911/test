import React from "react";

const Services = () => {

  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const data = [
    {
      icon: "/static/icons/food-and-beverage.png",
      title: "food and beverage",
      content:
        "When you require a reliable logistics and supply chain partner to assist you in planning your everyday operations, rely on the experts at IG. Every day, we assist our food and beverage customers in resolving supply and delivery difficulties specific to daily necessities such as milk, bread, eggs, frozen goods, and so on. IG delivers a temperature-controlled supply chain (uninterrupted cold chain for both fleet and warehouse) with flexible vendor pickups and just-in-time delivery, advanced equipment tracking, and an understanding of store and vendor requirements from product pickup through delivery"
    },
    {
      icon: "/static/icons/grocery.png",
      title: "grocery",
      content:
        "Sending your fresh and frozen items on a safe journey so that they arrive with an optimal shelf life and maximum freshness to their consumers. Taste is subjective, but freshness is a universal indicator of quality. Consumers expect their favourite products to be available at all times and in perfect shape, as if they were just harvested from the field or fished from the sea. As if that weren't enough, your fresh product may have to travel a considerable distance from its origins to our houses.This is why, at IG, we developed our perishables solution, which ensures that your items reach to your clients with an ideal shelf life and maximum freshness. Our professionals understand the specific issues you are facing, as well as the requirement for the most dependable handling from origin to destination."
    },
    {
      icon: "/static/icons/pharmaceutical.png",
      title: "Pharmaceutical & Healthcare Logistics",
      content:
        "Choose IG when you need safe and efficient shipping of pharmaceutical and healthcare products, from tailored medicine to medical devices and medical equipment, typically on a tight schedule. A partner you can count on to address the unique issues of end-to-end visibility and regulatory compliance that your sensitive products necessitate. You can rely on us to assist you at every step of the way. We provide an integrated and configurable PharmaChain to reduce write-offs, eliminate risks, and provide a safe and enjoyable consumer experience."
    },
    {
      icon: "/static/icons/chemicals.png",
      title: "Chemical & Fertilizer Logistics",
      content:
        "The business of shipping hazardous materials is a complicated mix of risks, specifications, and regulations. You need a logistics partner who provides visibility, control, assurance, and most importantly, the safe and secure transport of your hazardous and non-hazardous shipments.At IG Logistics, we provide visibility,control, assurance, and most importantly, safe and secure transport of hazardous and non- hazardous shipments."
    },
    {
      icon: "/static/icons/value.png",
      title: "Automotive Logistics",
      content:
        "The multi complex structures and supply chain of the automotive industry impose big challenges on logistics services, and require expertise in the design of supply chain management, process planning and operations efficiency.IG Logistics offers entire supply chain solutions including inbound procurement,production logistics and service parts distribution. This is because the delivery of components from numerous companies must be carefully coordinated to ensure a smooth manufacturing and assembly process."
    },
    {
      icon: "/static/icons/consumer.png",
      title: "consumer Logistics",
      content:
        "IG has an in-depth understanding of the consumer industry and offers innovative and responsive logistics solutions for the Fmcg, alcoholic beverages, lifestyle and retail sectors for the movement of goods at every stage of the process, from raw material through to the end consumer. At IG, we go all the way to ensure that your reefer shipment is delivered timely and efficiently, while maintaining product quality. Whether you are entering a new market, need a leaner supply chain, predictable costs, operational transparency or a storage solution - we have got you covered."
    }
  ];

  return (
    <div className="p-4 md:p-10">
      <div>
        <h1 className="text-center capitalize">products we deliver</h1>
      </div>

      <div className="py-10 grid md:grid-cols-3 place-items-center gap-6">
        {data.map((el, idx) => (
          <div
            key={idx}
            className="bg-gray-lightest transition duration-500 hover:bg-gray-light rounded-lg p-4 w-full space-y-2"
            style={{ minHeight: "34rem" }}
          >
            <div className="flex items-center bg-yellow p-4 justify-between rounded-lg space-x-8">
              <div className="">
                <h2 className="font-semibold">{el.title}</h2>
              </div>
              <div>
                <img src={el.icon} width="80px" />
              </div>
            </div>
            <div className="border-2 border-red" />
            <div className="text-justify">{el.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
