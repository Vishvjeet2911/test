import React from "react";
import { AboutUs } from "../LandingPage/components";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const leaders = [
    {
      name: "MR. GIAN CHAND ARORA",
      position: "CHAIRMAN AND MANAGING DIRECTOR",
      image: "/static/images/p1.png",
      intro: `Mr. Gian Chand Arora is the founder of IG International Pvt. Ltd. 
      The journey of IG International started from a very humble beginning with a small business in Jalandhar in the 60’s. It was Mr. Arora’s vision and enterprising spirit that drove the group to become one of the largest trader and importer of fresh fruit in India. Grasping the opportunity presented by Liberalization and Opening of markets that India experienced in the nineties, with Government permitting imports of fruit, he pioneered in offering the Indian consumers with the taste of premium club variety fruits unknown at that time. Today, IG imports fruits from more than 22 countries around the world. 
      He is the guiding beacon of the Group and a respected figure in the global fresh fruit industry.
      An inspiring leader with sterling qualities, his success story fired the imagination of a generation of Indian entrepreneurs in the Fresh Produce Industry. For many, he still remains an icon, a role model to be emulated.
      He visualised the growth of IG International as an integral part of his grand vision for Indian consumers – that the best fruits of the world must be made available and affordable to them.`
    },
    {
      name: "MR. TARUN ARORA",
      position: "DIRECTOR - FINANCE AND OPERATIONS",
      image: "/static/images/p3.png",
      intro: `The youngest scion of the family, Mr. Tarun Arora leads the young corporate team with his innovative and modern outlook. He is in the forefront in infusing technology and machine learning into the business. His thrust helped the company embrace digital transformation even before the crisis made it a necessity. He envisioned selling fruits online that stands to become a reality today. 
      With more than a decade of experience in the fresh produce industry, he understood the need of developing end to end cold supply chain and today the group has the largest number of temperature controlled warehousing and cold storages along with refrigerated transportations throughout the nation. With the support of this infrastructural base, IG became a sought-after brand in India.
      He is also the face of the group representing IG International in various global meets and trade shows across the world. His views are featured across prestigious trade news portals throughout the world.
      It is his spirited enthusiasm that made IG one of the best place to work.`
    },
    {
      name: "MR. SANJAY ARORA",
      position: "DIRECTOR - MARKETING AND SALES",
      image: "/static/images/p2.png",
      intro: `Mr Sanjay Arora joined the family business in 1993 and heads the sales and marketing of the group.
      He spearheaded the group’s growth, vertically and horizontally. It was under his stewardship that the group expanded its market throughout India across geography. He also envisioned the group enter farming and growing fruits, and today the group has orchards in India and in Czech Republic, growing licensed variety fruits.He also set up IG Logistics, a transport and logistics company for providing specialized reefer solution to the growing industry needs.
      He is a very resourceful person who oversees the overall running, maintenance and operation of the Company. Under his able leadership, the group saw a rise in clientele as well as in volume and establishing IG as a brand, locally as well as internationally.`
    },
    {
      name: "MR. SANJEEV GULATI",
      position: "GLOBAL CEO",
      intro: `Mr Sanjeev Gulati is From engineering background but ventured in to family business of fresh produce.16 years of experience in global fresh produce industry taking challenges in procurement .marketing and sales ,production ,quality control ,cold & supply chain development ,administration and business management in fields of international business and domestic trading.
      Working exposure in India,China and Europe. Represented the company at various levels and been part of many international delegations. Closely connected with key people in global fresh produce industry.`
    }
  ];

  return (
    <div>
      <AboutUs />

      <div className="py-6 bg-gray-50">
        <h1 className="text-center font-semibold">Our Leadership</h1>

        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex flex-wrap -m-4">
                {leaders.map((data, idx) => (
                  <div class="xl:w-1/2 md:w-1/2 p-4">
                    <div
                      class="border border-gray-200 p-6 rounded-lg"
                      style={{ minHeight: "30rem" }}
                    >
                      <div className="flex items-center space-x-8 py-4">
                        <div class="w-14 h-14 inline-flex rounded-full items-center justify-center rounded-full bg-indigo-100 text-indigo-500 ">
                          <img
                            src={data.image}
                            className="rounded-full"
                            width="50px"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{data.position}</h4>
                        </div>
                      </div>
                      <h2 class="text-lg capitalize text-gray-900 font-medium title-font mb-2">
                        {data.name}
                      </h2>
                      <h3 class="text-sm capitalize text-gray-600 font-medium title-font mb-2">
                        {data.intro}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
