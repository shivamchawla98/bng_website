"use client"

import { useRef } from "react";

import Image from "next/image";

import grid1 from "@/app/images/grid1.png";
import grid2 from "@/app/images/grid2.png";
import grid3 from "@/app/images/grid3.png";
import grid4 from "@/app/images/grid4.png";
import grid5 from "@/app/images/grid5.png";
import grid6 from "@/app/images/grid6.png";
import about1 from "@/app/images/abou1.png";
import about2 from "@/app/images/about2.png";

const solutionsData2 = [
  {
    id: 1,
    src: grid1,
    alt: "Solution 1",
    heading: "Marketing & PR",
    description1:
      "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost.",
    description2:
      "BNG provides powerful marketing and PR support through our dedicated IT wing, BNG-Media, powered by EXACODEL Info Corp. This team of digital experts manages each member’s marketing needs, delivering visibility both within the BNG network and on a global B2B platform—at no additional cost. Elite members benefit from free promotions on the BNG website and social media channels, while all members have access to additional paid services for web, CRM, and app development, digital marketing (SEO, SMO, SMM), bulk emailing, content marketing, and more. Members receive special discounts on any additional services they choose.",
    description3:
      "BNG-Media is dedicated to empowering brands through transformative digital experiences, meeting the growing necessity for digital innovation. For digital project discussions or consultations, BNG members are welcome to contact us at digital@bngglobalmedia.com. We’re committed to delivering impactful, cost-effective solutions, helping our members strengthen their market presence in the fast-paced digital world.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 2,
    src: grid2,
    alt: "Solution 2",
    heading: "24/7 Support",
    description1:
      "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",
    description2:
      "At BNG, we prioritize seamless customer service, offering 24/7 support to ensure our members are always connected. No matter the time or location, our dedicated team of network specialists is available through phone, email, or message, so members can access assistance whenever they need it. Understanding the importance of quick, accessible support, we are establishing regional offices to strengthen our presence and provide more tailored service.",
    description3:
      "Currently, BNG operates through four regional offices and a growing team of 23 support specialists, with more expansions planned in the near future. Our customer support team is dedicated to ensuring members can manage their logistics challenges with confidence and ease. Whether members need immediate support or have general inquiries, BNG’s team is here to provide solutions, delivering prompt assistance across time zones to keep our global network running smoothly.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 3,
    src: grid3,
    alt: "Solution 3",
    heading: "Annual Meetings",
    description1:
      "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    description2:
      "BNG hosts three annual meetings for our members: two virtual sessions and one in-person event, offering valuable opportunities for professional growth and relationship building. Our grand symposium allows members to meet partners and clients face-to-face, expanding visibility and fostering long-lasting business connections. Virtual meetings provide a convenient way to engage with fellow members from around the world, keeping participants connected and engaged with the latest industry developments.",
    description3:
      "These gatherings are designed to support BNG members in growing their networks and advancing their business goals, encouraging meaningful interactions and knowledge sharing. With a mix of virtual and in-person events, members enjoy flexible options to participate, no matter their location. By attending these meetings, members gain a competitive edge in the industry, discover potential collaborations, and strengthen their place within BNG’s global community, creating a more interconnected, dynamic network.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 4,
    src: grid4,
    alt: "Solution 4",
    heading: "Trade Directory",
    description1:
      "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    description2:
      "BNG provides powerful marketing and PR support through our dedicated IT wing, BNG-Media, powered by EXACODEL Info Corp. This team of digital experts manages each member’s marketing needs, delivering visibility both within the BNG network and on a global B2B platform—at no additional cost. Elite members benefit from free promotions on the BNG website and social media channels, while all members have access to additional paid services for web, CRM, and app development, digital marketing (SEO, SMO, SMM), bulk emailing, content marketing, and more. Members receive special discounts on any additional services they choose.",
    description3:
      "BNG-Media is dedicated to empowering brands through transformative digital experiences, meeting the growing necessity for digital innovation. For digital project discussions or consultations, BNG members are welcome to contact us at digital@bngglobalmedia.com. We’re committed to delivering impactful, cost-effective solutions, helping our members strengthen their market presence in the fast-paced digital world.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 5,
    src: grid5,
    alt: "Solution 5",
    heading: "Advanced Tools",
    description1:
      "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    description2:
      "BNG offers a comprehensive suite of digital tools within our technology-centric platform, helping members maximize the value of their membership. These tools, thoughtfully developed based on industry needs, provide members with vital resources for streamlining operations, improving productivity, and enhancing decision-making.",
    description3:
      "The Trade Directory is updated to ensure that members have access to accurate, relevant data, helping them make informed decisions and strategically grow their business. By providing access to a vast network of verified contacts, this directory serves as a bridge between BNG members and the wider logistics community, facilitating connections that are essential for expanding influence and visibility. With the Trade Directory, BNG supports members in building a strong foundation of reliable contacts, fostering successful collaborations that drive long-term growth and profitability.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 6,
    src: grid6,
    alt: "Solution 6",
    heading: "Real-Time Chat",
    description1:
      "Enjoy seamless, real-time chat functionality that enables fast, synchronized communication, enhancing networking efficiency.",
    description2:
      "BNG’s Real-Time Chat feature delivers instant communication, creating a fast, efficient networking experience for all members. This platform syncs messages seamlessly, offering members an interactive, real-time environment for discussing opportunities, sharing updates, and building connections. Real-Time Chat supports collaboration by enabling immediate responses, which is critical in the fast-paced logistics industry.",
    description3:
      "Whether it’s a quick question or a more detailed discussion, members can connect with colleagues, partners, and new prospects directly within the BNG platform. The chat feature enhances communication across the network, helping members stay in touch and take action on new opportunities as they arise. This interactive approach to communication supports BNG’s goal of building a responsive, engaged community of logistics professionals who can collaborate effectively anytime, anywhere.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 7,
    src: grid4,
    alt: "Solution 7",
    heading: "Live Talk",
    description1:
      "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",

    description2:
      "Live Talk is BNG’s virtual meeting platform, providing members with a 24/7, 365-day space to connect and conduct business globally. With thousands of logistics professionals active within the network, Live Talk allows members to meet in real time, discuss partnerships, and share insights without the need for physical travel.",
    description3:
      "The platform is designed to accommodate a variety of business discussions, from quick check-ins to in-depth negotiations, ensuring members can maximize networking opportunities within a secure, accessible environment. Through Live Talk, BNG members can maintain strong, active connections across borders, fostering collaboration and enabling business growth. By facilitating direct, instant communication, Live Talk empowers members to strengthen relationships and develop strategic partnerships, supporting a more interconnected and engaged logistics community.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 8,
    src: grid5,
    alt: "Solution 8",
    heading: "Industry Surveys",
    description1:
      "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",

    description2:
      "BNG’s Survey feature provides members with valuable insights into industry trends, performance benchmarks, and community feedback, helping them stay competitive in the ever-evolving logistics market. Conducted regularly, these surveys offer members a data-driven perspective on key industry topics, from operational best practices to emerging challenges.",
    description3:
      "Members receive exclusive access to survey findings, allowing them to make informed decisions and adapt their strategies based on the latest insights from peers and industry leaders. BNG’s Survey feature encourages active participation, helping members contribute to a shared knowledge base that benefits the entire network. With access to timely, relevant data, members can adjust their business approaches to stay ahead, ultimately creating a more adaptive and forward-thinking logistics community within BNG.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
];
const solutionsData = [
  {
    id: 1,
    src: grid1,
    alt: "Solution 1",
    heading: "Marketing & PR",
    description1:
      "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost.",
    description2: "",
    heightClass: "h-56 lg:h-64 xl:h-auto",
  },
  {
    id: 2,
    src: grid2,
    alt: "Solution 2",
    heading: "24/7 Support",
    description1:
      "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",
    description2: "",
    heightClass: "h-48 lg:h-56",
  },
  {
    id: 3,
    src: grid3,
    alt: "Solution 3",
    heading: "Annual Meetings",
    description1:
      "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    description2: "Efficient land transportation solutions.",
    heightClass: "h-64 lg:h-72",
  },
  {
    id: 4,
    src: grid4,
    alt: "Solution 4",
    heading: "Trade Directory",
    description1:
      "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    description2: "Cost-effective and reliable rail transport.",
    heightClass: "h-64 lg:h-72",
  },
  {
    id: 5,
    src: grid5,
    alt: "Solution 5",
    heading: "Advanced Tools",
    description1:
      "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96",
  },
  {
    id: 6,
    src: grid6,
    alt: "Solution 6",
    heading: "Real-Time Chat",
    description1:
      "Enjoy seamless, real-time chat functionality that enables fast, synchronized communication, enhancing networking efficiency.",
    description2: "Tailored logistics solutions for your needs.",
    heightClass: "h-48 lg:h-56",
  },
  {
    id: 7,
    src: grid4,
    alt: "Solution 7",
    heading: "Live Talk",
    description1:
      "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",
    description2: "",
    heightClass: "h-64 lg:h-72",
  },
  {
    id: 8,
    src: grid5,
    alt: "Solution 8",
    heading: "Industry Surveys",
    description1:
      "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96",
  },
];

const WhyUs = () => {
  const solutionRefs = useRef([]);

  const scrollToSolution = (index) => {
    if (solutionRefs.current[index]) {
      solutionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-12 flex flex-col   bg-white ">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white h-[max-content]">
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Why Us?
        </h2>
        <div className="flex w-[100%] justify-center">
          <p className="text-center w-[80%]">
            With BNG, receive comprehensive marketing support, 24/7 assistance,
            and participate in live industry events. Access a global trade
            directory, advanced tools, and real-time communication features to
            drive meaningful connections and business growth.
          </p>
        </div>

        {/* Grid with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {solutionsData?.map(
            (
              {
                id,
                src,
                alt,
                heading,
                description1,

                heightClass,
              },
              index
            ) => (
              <div
                className={`relative ${heightClass} `}
                key={id}
           
              >
                <Image
                  src={src}
                  className="rounded-lg w-full h-full object-cover"
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold text-white">{heading}</h3>
                    <p className="text-sm text-white">{description1}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* Dynamic Content */}
  
    </section>
  );
};

export default WhyUs;