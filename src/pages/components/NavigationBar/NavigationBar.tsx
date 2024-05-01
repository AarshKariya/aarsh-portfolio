import {
  House,
  UserFocus,
  Briefcase,
  Books,
  Newspaper,
  Chats,
  Cheers,
} from "@phosphor-icons/react";

export const navData = [
  {
    name: "home",
    path: "/",
    icon: <House />,
    id: 1,
  },
  {
    name: "about",
    path: "/about",
    icon: <UserFocus />,
    id: 2,
  },
  {
    name: "projects",
    path: "/projects",
    icon: <Briefcase />,
    id: 3,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <Cheers />,
    id: 4,
  },
  {
    name: "techblog",
    path: "/techblog",
    icon: <Newspaper />,
    id: 5,
  },
  {
    name: "litblog",
    path: "/litblog",
    icon: <Books />,
    id: 6,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <Chats />,
    id: 7,
  },
];

import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[1%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-[#8CB9BD] bg-opacity-10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData?.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={link.id}
              className={`${
                link.path === pathname && "text-[#F6995C]"
              } relative flex items-center group hover:text-[#F6995C] transition-all duration-300`}
            >
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBar;
