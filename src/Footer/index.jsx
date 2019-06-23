import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import FooterLink from "./FooterLink";

import { getPublicUrl } from "../utils";
import { colors } from "../styles";
import { helpLinks, menuLinks } from "./links";

const LinkSocial = styled.a``;

const FooterContainer = styled.div`
  background-color: ${colors.paleGreyThree};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2% 6%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
  color: #c6cdd7;
`;

const Payments = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Payment = styled.li`
  margin-right: 20px;
`;

const PaymentImg = styled.img`
  width: auto;
  max-width: 70px;
`;

const PaymentDesc = styled.p`
  margin: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #1e1e3c;
  max-width: 300px;
`;

const ComIcon = styled.a`
  display: flex;
  margin-top: 15px;
  font-size: 18px;
  text-decoration: none;
  color: #1e1e3c;
  transition: 0.4s ease color;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    color: #4ad9bd;
  }
`;

const Phone = styled(ComIcon)`
  &:before {
    background-image: url("./assets/svg/icon-footer-phone.svg");
  }
`;

const Mail = styled(ComIcon)`
  &:before {
    background-image: url("./assets/svg/icon-footer-email.svg");
  }
`;

const Icons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

const IconContainer = styled.li``;

const Icon = styled.img`
  width: ${styledMap`
    default: 20px;
    vk: 30px;
  `};
  height: 20px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Title> Меню </Title>
        {menuLinks.map(item => (
          <FooterLink key={item.id} link={item.link} text={item.text} />
        ))}
      </Container>
      <Container>
        <Title> Помощь </Title>
        {helpLinks.map(item => (
          <FooterLink key={item.id} link={item.link} text={item.text} />
        ))}
      </Container>
      <Container>
        <Title> Способы облаты </Title>
        <Payments>
          <Payment>
            <PaymentImg
              src={getPublicUrl("/assets/svg/logo-footer-mastercard.svg")}
              alt="Мастеркарт"
            />
          </Payment>
          <Payment>
            <PaymentImg
              src={getPublicUrl("/assets/png/logo-footer-visa@2x.png")}
              alt="Виза"
            />
          </Payment>
          <Payment>
            <PaymentImg
              src={getPublicUrl("/assets/png/logo-footer-mir@2x.png")}
              alt="МИР"
            />
          </Payment>
        </Payments>
        <PaymentDesc>
          Вы можете оплатить покупки наличными или банковской картой при
          получении заказа.
        </PaymentDesc>
        <PaymentDesc>Либо оплатить заказ онлайн на сайте.</PaymentDesc>
      </Container>
      <Container>
        <Title> Наши контакты </Title>
        <Phone href="tel:5551234567"> 8 800 555 35 35 </Phone>
        <Mail href="mailto:info@frogogo.ru"> info@frogogo.ru </Mail>
        <Icons>
          {/* Links ? */}
          <IconContainer>
            <LinkSocial href="https://facebook.com/">
              <Icon
                src={getPublicUrl("/assets/png/icon-footer-facebook@2x.png")}
                alt="Facebook"
              />
            </LinkSocial>
          </IconContainer>
          <IconContainer>
            <LinkSocial href="https://twitter.com/">
              <Icon
                src={getPublicUrl("/assets/png/icon-footer-twitter@2x.png")}
                alt="Twitter"
              />
            </LinkSocial>
          </IconContainer>
          <IconContainer>
            <LinkSocial href="https://instagram.com/">
              <Icon
                src={getPublicUrl("/assets/png/icon-footer-instagram@2x.png")}
                alt="Instagram"
              />
            </LinkSocial>
          </IconContainer>
          <IconContainer>
            <LinkSocial href="https://vk.com/">
              <Icon
                vk
                src={getPublicUrl("/assets/png/icon-footer-vk@2x.png")}
                alt="VK"
              />
            </LinkSocial>
          </IconContainer>
        </Icons>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
