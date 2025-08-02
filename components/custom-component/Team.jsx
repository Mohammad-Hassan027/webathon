import { teamMembers } from "./../../src/config/teamConfig";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

const Team = () => {
  return (
    <div className="">
      <h1 className="scroll-m-20 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
        Our Team
      </h1>
      <p className="text-xl sm:text-2xl text-center my-4">
        Meet the people behind our company.
      </p>
      <div className="bg-transparent">
        {teamMembers.map((member) => (
          <HoverCard key={member.id}>
            <HoverCardTrigger className="cursor-pointer">
              <div className="flex items-center justify-between px-10 py-6 mb-8 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                <div className="">
                  <h2 className="text-3xl font-bold">{member.name}</h2>
                </div>
                <div>
                  <p className="text-xl font-medium text-gray-500">
                    {member.role}
                  </p>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="shadow-lg p-0 m-0">
              <div className="flex items-center justify-center p-0 m-0 rounded-[50%]">
                <picture className="rounded-[50%] w-30 h-30 sm:w-64 sm:h-64 overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover flex items-center justify-center"
                    loading="lazy"
                  />
                </picture>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
