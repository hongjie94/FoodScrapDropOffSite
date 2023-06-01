import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import member2Img from "../../assets/imgs/teamMembers/member2.png";
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Gabriela Guayara",
      major: "Computer Science",
      image: 'https://placehold.jp/300x352.png',
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Hongjie Zhang",
      major: "Computer Information System",
      image: member2Img,
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
    {
      name: "Mamuna Chaudhry",
      major: "Computer Science",
      image: 'https://placehold.jp/300x352.png',
      github: "https://github.com/bobjohnson",
      linkedin: "https://linkedin.com/in/bobjohnson",
      twitter: "https://twitter.com/bobjohnson",
    },
  ];

  return (
    <section className="py-10 mt-20 mx-auto">
  
    <div className="relative text-center mb-20">
      <span className="text-[#DA4C31] text-3xl font-semibold">MEET THE TEAM</span>
      <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black"></span>
    </div>
      <div className="w-full flex justify-between memberCard">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2  xl:grid-cols-3 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="lg:w-full w-auto max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 ">
                  <img
                    className="h-50 w-full object-cover md:h-full md:w-48 rounded-tl-xl rounded-bl-xl"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                  <div className="font-semibold">{member.name}</div>
                    <div className="text-gray-500 text-xs">
                      {member.major}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
