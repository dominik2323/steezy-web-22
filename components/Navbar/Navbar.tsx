import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import strings from "../../data/strings";
import { Area } from "../../generated/types";
import Fixed from "../Fixed/Fixed";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { StyledImg } from "../Img/Styles/StyledImg";
import Logo from "../Logo/Logo";
import { Micro } from "../Typo/Micro";
import { Nano } from "../Typo/Nano";
import Burger from "./Burger";
import NavLink from "./NavLink";
import {
  ContactUs,
  LinksBlock,
  NavHeader,
  NavLinks,
  NavlinksMask,
  PhoneDecoration,
  StyledNavbar,
  linksBlockVariants,
} from "./Styles/StyledNavbar";

interface NavbarProps {
  areas: Area[];
  header?: string;
}

const Navbar = ({ areas, header }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const router = useRouter();
  const { scroll } = useLocomotiveScroll();
  const hasSmoothScroll = !!scroll?.smooth;

  return (
    <Fixed id={"fixed-navbar"} hasSmoothScroll={hasSmoothScroll}>
      <StyledNavbar hasSmoothScroll={hasSmoothScroll}>
        <Logo />

        <NavlinksMask>
          <AnimatePresence mode={"wait"}>
            {!isMenuOpen && header && (
              <NavHeader
                key={"header"}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.3 }}
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  animate: {
                    opacity: 1,
                  },
                  exit: {
                    opacity: 0,
                  },
                }}
              >
                <Nano>{header}</Nano>
              </NavHeader>
            )}
            {isMenuOpen && (
              <NavLinks
                key={"links"}
                $hasSmoothScroll={hasSmoothScroll}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                style={{
                  transformOrigin: "100% 0%",
                  pointerEvents: isMenuOpen ? "all" : "none",
                }}
                transition={{
                  type: "tween",
                  ease: [0.65, 0.05, 0.36, 1],
                }}
                variants={linksBlockVariants}
              >
                <LinksBlock className='stretch'>
                  {areas.map(({ area_name, _slug, is_default }, i) => (
                    <NavLink
                      delay={0.08 * i}
                      active={router.asPath === `/projects/${_slug}`}
                      href={`/projects/${_slug}`}
                      key={_slug}
                    >
                      {area_name}
                    </NavLink>
                  ))}
                </LinksBlock>
                {strings.navData.map(({ link, name }, i) => (
                  <LinksBlock key={link}>
                    <NavLink
                      delay={(areas.length - 1 + i) * 0.08}
                      active={router.asPath === link}
                      href={link}
                    >
                      {name}
                    </NavLink>
                  </LinksBlock>
                ))}
                <PhoneDecoration
                  variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
                >
                  <ContactUs href={`/contact`}>
                    <StyledImg as={"img"} src={"/icons/contact-icon.svg"} />
                    <Micro className='uppercase break-lines'>
                      {strings.globals.tellUsYourStory}
                    </Micro>
                  </ContactUs>

                  <Instagram />
                  <Vimeo />
                </PhoneDecoration>
              </NavLinks>
            )}
          </AnimatePresence>
        </NavlinksMask>

        <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
      </StyledNavbar>
    </Fixed>
  );
};

export default Navbar;
