import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import member2Img from "../../assets/imgs/teamMembers/member2.png";
import member3Img from "../../assets/imgs/teamMembers/member1Img.jpg";
import member1Img from "../../assets/imgs/teamMembers/member1.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Gabriela Guayara",
      major: "Computer Science",
      image: member1Img,
      github: "#",
      linkedin: "#",
      email: "gabrielaguayara@gmail.com",
    },
    {
      name: "Hongjie Zhang",
      major: "Computer Information System",
      image: member2Img,
      github: "https://github.com/hongjie94",
      linkedin: "https://www.linkedin.com/in/hongjiez",
      email: "https://hong.zhang94@gmail.com",
    },
    {
      name: "Mamuna Chaudhry",
      major: "Computer Science",
      image: member3Img,
      github: "#",
      linkedin: "#",
      email: "mamunachaudhry9@gmail.com",
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
                    className="memberImage h-50 w-full object-cover md:h-full md:w-48 rounded-tl-xl rounded-bl-xl"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="textWrap p-8 flex flex-col justify-between">
                  <div>
                  <div className="font-semibold">{member.name}</div>
                    <div className="text-gray-500 text-xs">
                      {member.major}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-3">

                  {member.email && (
                      <a
                        href={member.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <FaRegEnvelope size={20} />
                      </a>
                    )}

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
