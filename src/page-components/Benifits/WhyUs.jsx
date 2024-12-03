import Image from "next/image";
import grid1 from "@/app/images/home/Marketing-PR.png";
import grid2 from "@/app/images/home/24-7-Support.png";
import grid3 from "@/app/images/home/Annual-Meetings.png";
import grid4 from "@/app/images/home/Trade-Directory.png";
import grid5 from "@/app/images/home/Advance-Tools.jpg";
import grid6 from "@/app/images/home/Real-Time-Chat.png";
import grid7 from "@/app/images/home/Live-Talk.png";
import grid8 from "@/app/images/home/Industry-Surveys.png";
import grid9 from "@/app/images/home/Strict-Selection-Process.png";

import logo1 from "@/app/images/icon1.svg";
import logo2 from "@/app/images/icon1.svg";
import logo3 from "@/app/images/icon1.svg";
import logo4 from "@/app/images/icon1.svg";
import logo5 from "@/app/images/icon1.svg";
import logo6 from "@/app/images/icon1.svg";
import logo7 from "@/app/images/icon1.svg";
import logo8 from "@/app/images/icon1.svg";

import about1 from "@/app/images/abou1.png";
import about2 from "@/app/images/about2.png";
import { useRef } from "react";

const solutionsData2 = [
  {
    id: 1,
    src: grid1,
    alt: "Solution 1",
    heading: "Marketing & PR",
    description1:
      "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost.",
    description2:
      "BNG-Media, powered by ExaCodel InfoCorp, offers free marketing support for Elite members, including website and social media promotions. Paid services like SEO, CRM development, and digital marketing are also available at exclusive discounts. Our expert team crafts impactful strategies to boost visibility, enhance market reach, and strengthen member brands. With BNG-Media’s support, members stay competitive and achieve greater success in today’s fast-paced logistics industry.",
    description3:
      "BNG-Media is dedicated to empowering brands through transformative digital experiences, meeting the growing necessity for digital innovation. For digital project discussions or consultations, BNG members are welcome to contact us at digital@bngglobalmedia.com. We’re committed to delivering impactful, cost-effective solutions, helping our members strengthen their market presence in the fast-paced digital world.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 2,
    src: grid2,
    alt: "Solution 2",
    heading: "24/7 Support",
    description1:
      "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",
    description2:
      "BNG provides seamless 24/7 customer support via phone, email, or message. Our dedicated team, spread across four regional offices, offers prompt assistance to address challenges and ensure smooth logistics operations. With reliable help across time zones, members stay connected and overcome obstacles easily. Whether it’s an urgent query or operational guidance, BNG’s support ensures confidence and convenience, empowering members to focus on growing their business.",
    description3:
      "Currently, BNG operates through four regional offices and a growing team of 23 support specialists, with more expansions planned in the near future. Our customer support team is dedicated to ensuring members can manage their logistics challenges with confidence and ease. Whether members need immediate support or have general inquiries, BNG’s team is here to provide solutions, delivering prompt assistance across time zones to keep our global network running smoothly.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 3,
    src: grid3,
    alt: "Solution 3",
    heading: "Annual Meetings",
    description1:
      "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    description2:
      "BNG provides seamless 24/7 customer support via phone, email, or message. Our dedicated team, spread across four regional offices, offers prompt assistance to address challenges and ensure smooth logistics operations. With reliable help across time zones, members stay connected and overcome obstacles easily. Whether it’s an urgent query or operational guidance, BNG’s support ensures confidence and convenience, empowering members to focus on growing their business.",
    description3:
      "These gatherings are designed to support BNG members in growing their networks and advancing their business goals, encouraging meaningful interactions and knowledge sharing. With a mix of virtual and in-person events, members enjoy flexible options to participate, no matter their location. By attending these meetings, members gain a competitive edge in the industry, discover potential collaborations, and strengthen their place within BNG’s global community, creating a more interconnected, dynamic network.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 4,
    src: grid4,
    alt: "Solution 4",
    heading: "Trade Directory",
    description1:
      "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    description2:
      "The BNG Trade Directory gives elite members access to verified global contacts, including exporters, importers, and logisticians. This essential resource helps members connect directly with clients, explore opportunities, and expand their business. Regular updates ensure accurate and relevant data for strategic decisions. By fostering meaningful collaborations and enabling easy access to key industry players, the Trade Directory becomes a valuable tool for growing networks and achieving long-term success.",
    description3:
      "BNG-Media is dedicated to empowering brands through transformative digital experiences, meeting the growing necessity for digital innovation. For digital project discussions or consultations, BNG members are welcome to contact us at digital@bngglobalmedia.com. We’re committed to delivering impactful, cost-effective solutions, helping our members strengthen their market presence in the fast-paced digital world.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 5,
    src: grid5,
    alt: "Solution 5",
    heading: "Advanced Tools",
    description1:
      "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    description2:
      "BNG provides advanced tools to simplify operations and maximize productivity. These resources include real-time tracking, workflow optimization, and performance monitoring, all accessible through one centralized platform. Members benefit from improved efficiency, enhanced decision-making, and transparency in everyday business operations. Designed to meet logistics industry needs, these tools empower members to achieve measurable results and unlock their full potential while seamlessly managing their business activities.",
    description3:
      "The Trade Directory is updated to ensure that members have access to accurate, relevant data, helping them make informed decisions and strategically grow their business. By providing access to a vast network of verified contacts, this directory serves as a bridge between BNG members and the wider logistics community, facilitating connections that are essential for expanding influence and visibility. With the Trade Directory, BNG supports members in building a strong foundation of reliable contacts, fostering successful collaborations that drive long-term growth and profitability.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 6,
    src: grid6,
    alt: "Solution 6",
    heading: "Real-Time Chat",
    description1:
      "Enjoy seamless, real-time chat functionality that enables fast, synchronized communication, enhancing networking efficiency.",
    description2:
      "BNG’s Real-Time Chat delivers instant, seamless communication for members, enabling them to share updates, collaborate, and build connections efficiently. This feature supports fast-paced interactions, making it easier for members to discuss opportunities and strengthen partnerships. Designed for the logistics industry’s dynamic needs, Real-Time Chat ensures smoother operations and responsive communication, empowering members to stay connected and capitalize on opportunities in real-time.",
    description3:
      "Whether it’s a quick question or a more detailed discussion, members can connect with colleagues, partners, and new prospects directly within the BNG platform. The chat feature enhances communication across the network, helping members stay in touch and take action on new opportunities as they arise. This interactive approach to communication supports BNG’s goal of building a responsive, engaged community of logistics professionals who can collaborate effectively anytime, anywhere.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 7,
    src: grid4,
    alt: "Solution 7",
    heading: "Live Talk",
    description1:
      "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",

    description2:
      "Live Talk, BNG’s 24/7 virtual meeting platform, connects members globally for real-time networking and business discussions. This tool allows members to strengthen partnerships, share insights, and collaborate effectively without physical limitations. Live Talk fosters meaningful connections and drives growth, empowering members to thrive in the logistics industry. With seamless accessibility and interactive communication, it ensures members stay engaged and maximize opportunities across borders.",
    description3:
      "The platform is designed to accommodate a variety of business discussions, from quick check-ins to in-depth negotiations, ensuring members can maximize networking opportunities within a secure, accessible environment. Through Live Talk, BNG members can maintain strong, active connections across borders, fostering collaboration and enabling business growth. By facilitating direct, instant communication, Live Talk empowers members to strengthen relationships and develop strategic partnerships, supporting a more interconnected and engaged logistics community.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 8,
    src: grid5,
    alt: "Solution 8",
    heading: "Industry Surveys",
    description1:
      "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",

    description2:
      "BNG’s Survey feature provides valuable insights into logistics industry trends, performance benchmarks, and feedback. Regularly conducted, these surveys enable members to make data-driven decisions and adapt strategies effectively. By staying informed about emerging challenges and best practices, members remain competitive and agile in the evolving logistics market. The Survey feature fosters collaboration and empowers members with actionable knowledge to stay ahead and succeed in a dynamic business environment.",
    description3:
      "Members receive exclusive access to survey findings, allowing them to make informed decisions and adapt their strategies based on the latest insights from peers and industry leaders. BNG’s Survey feature encourages active participation, helping members contribute to a shared knowledge base that benefits the entire network. With access to timely, relevant data, members can adjust their business approaches to stay ahead, ultimately creating a more adaptive and forward-thinking logistics community within BNG.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 9,
    src: grid9,
    alt: "Solution 5",
    heading: "Strict Selection Process",
    description1:
      "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process.",
    description2: "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process. Applications undergo credit checks, legal verifications, and trade reference reviews. This thorough process guarantees that all members meet high standards of professionalism, credibility, and reliability. By maintaining a strict selection process, BNG fosters a trusted community where members can collaborate confidently, build valuable partnerships, and grow their businesses within a secure and credible network.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo8,
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
  {
    id: 9,
    src: grid9,
    alt: "Solution 5",
    heading: "Strict Selection Process",
    description1:
      "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process.",
    description2: "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process. Applications undergo credit checks, legal verifications, and trade reference reviews. This thorough process guarantees that all members meet high standards of professionalism, credibility, and reliability. By maintaining a strict selection process, BNG fosters a trusted community where members can collaborate confidently, build valuable partnerships, and grow their businesses within a secure and credible network.",
    heightClass: "h-80 lg:h-96",
    logo: logo8,
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
    <section className="py-14 bg-secondryBg relative">
      {/* <div
        className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
          // Alternative fallback
        }}></div> */}
      <div
        className="absolute top-[50%] left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
          // Alternative fallback
        }}></div>
      {/* Right-middle Patch */}
      <div
        className="absolute top-[190px] right-12 transform translate-x-1/2 -translate-y-1/2 md:w-[160px] h-[5%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #4D7DB5 10%, #4D7DB5 10%, #D186EB 100%)",
          zIndex: 1,
          filter: "blur(50px)",
        }}></div>

      <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          <h2 className="text-[40px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Why Us?
          </h2>
          <h2
            className="absolute text-center top-[-30px] md:left-[35%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Why Us?
          </h2>
        </div>
        <div className="flex w-[100%] justify-center">
          <p className="text-center w-[80%] text-gray-600">
            With BNG, receive comprehensive marketing support, 24/7 assistance,
            and participate in live industry events. Access a global trade
            directory, advanced tools, and real-time communication features to
            drive meaningful connections and business growth.
          </p>
        </div>

        {/* Grid with 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData?.map(
            (
              {
                id,
                src,
                alt,
                heading,
                description1,
                logo,
                heightClass,
              },
              index
            ) => (
              <div
                className={`relative aspect-square overflow-hidden group rounded-lg shadow-lg`}
                key={id}
                onClick={() => scrollToSolution(index)}
                ref={(el) => (solutionRefs.current[index] = el)} // Storing reference to each section
              >
                <Image
                  src={src}
                  className="transition-transform duration-300 group-hover:scale-110:"
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="self-start"
                  />
                  <div className="transform transition-all duration-300 translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-2">{heading}</h3>
                    <p className="text-sm max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">{description1}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* Dynamic Content */}
      <section className=" bg-secondryBg ">
        {solutionsData2.map(
          ({ heading, description1, description2, description3, src }, index) => (
            <section key={index} className="bg-secondryBg  py-12">
              <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                {/* First Row */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
                  <div
                    className={`relative flex justify-center items-center ${index % 2 !== 0 ? "lg:order-2" : ""
                      }`}>
                    <div
                      className={`hidden lg:block absolute ${index % 2 === 0 ? "left-16 top-12" : "right-16  bottom-10"
                        } bottom-[-2px] h-[350px] w-[400px] border-primary border-2 rounded-md`}></div>
                    <Image
                      className="rounded-xl object-cover z-10"
                      src={src}
                      height={350}
                      alt={`About Us Image ${index + 2}`}
                    />
                  </div>
                  <div
                    className="flex flex-col justify-center items-center lg:items-start gap-8"
                    ref={(el) => (solutionRefs.current[index] = el)} // Referencing the solution details section
                  >
                    <h2 className="text-3xl font-bold text-[#27293B]">
                      {heading}
                    </h2>
                    <p className="text-gray-600 text-[18px]">
                      {description2}
                      {description3}
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
                  <div
                    className={`relative flex justify-center items-center ${
                      index % 2 === 0 ? "lg:order-2" : ""
                    }`}>
                    <div
                      className={`hidden lg:block absolute ${
                        index % 2 === 0 ? "right-16" : "left-16"
                      } bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md`}></div>
                    <Image
                      className="rounded-xl object-cover z-10"
                      src={index % 2 === 0 ? about2 : about1}
                      height={350}
                      alt={`About Us Image ${index + 2}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center lg:items-start gap-8">
                    <p className="text-[#27293B]">{description3}</p>
                  </div>
                </div> */}
              </div>
            </section>
          )
        )}
      </section>
    </section>
  );
};

export default WhyUs;
