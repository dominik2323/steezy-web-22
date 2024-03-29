import { useRouter } from "next/router";
import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import strings from "../../data/strings";
import { Area } from "../../generated/types";
import Fixed from "../Fixed/Fixed";
import { HeroSocials } from "../Hero/Styles/StyledHero";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { StyledImg } from "../Img/Styles/StyledImg";
import Logo from "../Logo/Logo";
import { Micro } from "../Typo/Micro";
import Burger from "./Burger";
import NavLink from "./NavLink";
import {
  ContactUs,
  NavLinks,
  PhoneDecoration,
  StyledNavbar,
} from "./Styles/StyledNavbar";

interface NavbarProps {
  areas: Area[];
}

const Navbar = ({ areas }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const router = useRouter();
  const { scroll } = useLocomotiveScroll();
  const hasSmoothScroll = !!scroll?.smooth;

  return (
    <Fixed id={"fixed-navbar"} hasSmoothScroll={hasSmoothScroll}>
      <StyledNavbar hasSmoothScroll={hasSmoothScroll}>
        <Logo />
        <NavLinks
          $hasSmoothScroll={hasSmoothScroll}
          animate={isMenuOpen ? "open" : "close"}
          initial={false}
          style={{
            transformOrigin: "100% 0%",
            pointerEvents: isMenuOpen ? "all" : "none",
          }}
          transition={{
            duration: 0.2,
            type: "tween",
            ease: [0.65, 0.05, 0.36, 1],
          }}
          variants={{
            open: {
              scaleX: 1,
              transition: {
                when: "beforeChildren",
                staggerDirection: -1,
                staggerChildren: 0.03,
              },
            },
            close: {
              scaleX: 0,
              transition: {
                when: "afterChildren",
                staggerDirection: 1,
                staggerChildren: 0.03,
              },
            },
          }}>
          {areas.map(({ area_name, _slug, is_default }) => (
            <NavLink
              active={router.asPath === `/projects/${_slug}`}
              highlighted={is_default}
              href={`/projects/${_slug}`}
              key={_slug}>
              {area_name}
            </NavLink>
          ))}
          {strings.navData.map(({ highlighted, link, name }) => (
            <NavLink
              active={router.asPath === link}
              highlighted={highlighted}
              href={link}
              key={link}>
              {name}
            </NavLink>
          ))}
          <PhoneDecoration
            variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}>
            <ContactUs href={`/contact`}>
              <StyledImg as={"img"} src={"/icons/contact-icon.svg"} />
              <Micro className='uppercase break-lines'>
                {strings.globals.tellUsYourStory}
              </Micro>
            </ContactUs>
            <HeroSocials>
              <Instagram />
              <Vimeo />
            </HeroSocials>
          </PhoneDecoration>
        </NavLinks>
        <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
      </StyledNavbar>
    </Fixed>
  );
};

export default Navbar;
