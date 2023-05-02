import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/assets/images/profile-pic.jpeg";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";

const Navbar = () => {
  const ref = useRef<string | any>();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    //update class name of clicked links
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  const handleMenuClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setIsShowMenu(false)
    }
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link href="#home" onClick={handleScroll}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full w-14 h-14 overflow-hidden"
          >
            <Image src={profilePic} alt="navbarlogo" object-fit="cover" />
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                About Me
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Work Experiences
              </motion.li>
            </Link>
            <Link
              href="#projects"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#certifications"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Certifications
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div
          onClick={() => setIsShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textYellow cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {isShowMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleMenuClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[60%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setIsShowMenu(false)}
                className="text-3xl text-textYellow cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col text-base gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About Me
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Work Experiences
                    </motion.li>
                  </Link>
                  <Link
                    href="#projects"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#certifications"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      Certifications
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="inline-flex items-center justify-center w-full pt-6 pb-12 gap-4">
                  <motion.a 
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.8, ease: "easeIn"}}
                    href="https://github.com/Javiier-pzk" 
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.85, ease: "easeIn"}}
                    href="https://www.linkedin.com/in/javier-phon-zhee-kai/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a 
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.9, ease: "easeIn"}}
                    href="mailto:javierphon@gmail.com" 
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SiGmail />
                    </span>
                  </motion.a>
                  <motion.a 
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.95, ease: "easeIn"}}
                    href="mailto:javier.pzk@u.nus.edu" 
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SiMicrosoftoutlook />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
