"use client";

import Logo from "@/assets/1.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { slideBottom } from "@/utils/animation";

const NavbarLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Features",
      link: "#",
    },
    {
      id: 3,
      title: "Shop",
      link: "#",
    },
    {
      id: 4,
      title: "About us",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

  const Navbar = () => {
    return (
      <>
        <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="py-8 container flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-1">
          <Image src={Logo} alt="" className="w-[70px]" />
          <p className="font-bold text-2xl">NeoMatrix</p>
        </div>
        {/* Link section */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className="hover:text-amber-500 uppercase text-sm xl:text-base"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Button section */}
        <div>
          <button className="btn-primary">Request For Quotes</button>
        </div>
        </motion.div>
      </>
    );
  };
export default Navbar;