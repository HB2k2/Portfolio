import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  useSelect,
} from "@material-tailwind/react";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [hoverState,setHoverState] = useState(0)
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(()=>{

  },[])
 
  const navList = (
    <ul className="mb-4 mt-2 relative group flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <div className="box w-16 rounded-md top-1/2 group-hover:block hidden duration-300 -translate-y-1/2 -translate-x-2 h-10 absolute bg-transparent border-[1px] border-white"></div>
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        onmouseover
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#projects" className="flex items-center">
          Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-hidden">
      <Navbar className="fixed bg-[#030712] text-[#f9fafb] text-lg top-0 z-20 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 overflow-x-hidden">
        <div className="flex items-center justify-around text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium pr-[14rem] text-[1.5rem]"
          >
            {"<Portfolio />"}
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <a href="https://drive.google.com/file/d/1pSEsqmre-5SbxXvsC7qT8g_1-3-Z-9os/view" target="blank"><span>Resume</span></a>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Resume</span>
          </Button>
        </MobileNav>
      </Navbar>
    </div>
  );
}