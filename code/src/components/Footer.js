import React from "react";
import { FiMail, FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare, FaPatreon } from "react-icons/fa";

import {
  DesktopFooter,
  ContactInfo,
  Title,
  Text,
  MobileFooter,
  IconWrapper,
  InfoWrapper,
  IconTitle
} from "./styled-components/FooterElements";

const style = { color: "white", fontSize: "2em" };

const Footer = () => {
  return (
    <>
      <DesktopFooter>
        <ContactInfo>
          <Title>Contact Us!</Title>
          <Text>
            PetSpotter Sweden <br />
            Djurvögen 2 <br />
            Ingen Var, Sweden <br />
            Tel: +46 00 00 12 34 <br />
            support.info@petspotters.se <br />
            © Petspotter by Elaine Bergström
            and Malin Göthe
          </Text>
        </ContactInfo>
        <InfoWrapper>
          <IconTitle>Follow Us!</IconTitle>
          <IconWrapper>
            <FiMail style={style} />
            <AiOutlineTwitter style={style} />
            <FiInstagram style={style} />
            <FaFacebookSquare style={style} />
          </IconWrapper>
        </InfoWrapper>
        <InfoWrapper>
          <IconTitle>Support us on Patreon!</IconTitle>
          <FaPatreon style={style} />
        </InfoWrapper>
      </DesktopFooter>
      <MobileFooter>
        <IconWrapper>
          <FiMail style={style} />
          <AiOutlineTwitter style={style} />
          <FiInstagram style={style} />
          <FaFacebookSquare style={style} />
        </IconWrapper>
      </MobileFooter>
    </>
  );
};

export default Footer;
