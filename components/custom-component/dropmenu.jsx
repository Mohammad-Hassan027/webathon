import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCircleQuestion,
  faInfoCircle,
  faUserGroup,
  faHeadset,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function DropdownMenuDemo({ setIsOpen, isOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative sm:p-1 md:p-2">
      <DropdownMenu
        onOpenChange={(open) => setIsOpen(open)}
        className="transition duration-300 ease-in opacity-100 scale-100"
      >
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="p-2 relative w-10 h-10 flex flex-col justify-center items-center group border-none bg-transparent cursor-pointer"
          >
            <span
              className={`absolute h-1 w-8 bg-black rounded transition-all duration-500 
          ${isOpen ? "rotate-45 top-3.5" : "top-2"}`}
            />
            <span
              className={`absolute h-1 w-8 bg-black rounded transition-all duration-500 
          ${isOpen ? "opacity-0" : "top-4"}`}
            />
            <span
              className={`absolute h-1 w-8 bg-black rounded transition-all duration-500 
          ${isOpen ? "-rotate-45 top-3.5" : "top-6"}`}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Services</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <a href="/" className="flex items-center justify-between w-full">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ color: "#ff5d52", fontSize: "20px" }}
                  />
                  Home
                </span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/about">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ color: "#ff5d52", fontSize: "20px" }}
                />
                About
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/faq">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  style={{ color: "#ff5d52", fontSize: "20px" }}
                />
                Faq
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#team">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ fontSize: "20px", color: "#ff5d52" }}
                />
                Our Team
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "18px" }} />
              GitHub
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#">
              <FontAwesomeIcon icon={faHeadset} style={{ fontSize: "18px" }} />
              Support
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ fontSize: "18px" }}
            />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropdownMenuDemo;
