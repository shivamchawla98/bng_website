import Image from "next/image";
import facebookIcon from "@/app/images/fb.svg";
import twitterIcon from "@/app/images/twitter.svg";
import githubIcon from "@/app/images/linkedin.svg";
import dribbbleIcon from "@/app/images/utube.svg";
import Team1 from "@/app/images/team1.png";
import Team2 from "@/app/images/team2.png";

import Team3 from "@/app/images/team3.png";

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imgSrc: Team1,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    imgSrc: Team2,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    imgSrc: Team3,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    imgSrc: Team2,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    imgSrc: Team2,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  {
    name: "Helene Engels",
    role: "CTO/Co-founder",
    imgSrc: Team2,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkdein: "#",
      Youtube: "#",
    },
  },
  // Add more team members up to 6
];

const TeamSection = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl flex flex-col justify-center items-center text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-[52px] tracking-tight font-extrabold text-[#27293B] ">
            Our Team
          </h2>
          <p className="font-light text-gray-400 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind.
          </p>
        </div>
        <div className="grid gap-8  w-[100%] lg:max-w-[80%] grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.slice(0, 6).map((member, index) => (
            <div
              key={index}
              className="text-center mt-4 text-gray-400 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={member.imgSrc}
                alt={`${member.name} Avatar`}
                width={144}
                height={144}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">{member.name}</a>
              </h3>
              <p>{member.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href={member.socialLinks.facebook}
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.twitter}
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <Image
                      src={twitterIcon}
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.github}
                    className="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <Image
                      src={githubIcon}
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.dribbble}
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                    <Image
                      src={dribbbleIcon}
                      alt="Dribbble"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
