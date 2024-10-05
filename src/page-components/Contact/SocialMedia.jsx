import Image from 'next/image';
import twitter from "@/app/images/twitter.svg"
import fb from "@/app/images/fb.svg"
import utube from "@/app/images/utube.svg"
import linkedin from "@/app/images/linkedin.svg"


export const SocialMedia = () => {
    const socialLinks = [
      { name: 'twitter', icon: <Image src={twitter} alt="Twitter Icon" />, href: '#' },
      { name: 'facebook', icon: <Image src={fb} alt="Facebook Icon" />, href: '#' },
      { name: 'youtube', icon: <Image src={utube} alt="YouTube Icon" />, href: '#' },
      { name: 'linkedin', icon: <Image src={linkedin} alt="LinkedIn Icon" />, href: '#' },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Media</h2>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };