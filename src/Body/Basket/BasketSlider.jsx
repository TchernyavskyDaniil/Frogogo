import React, { useState } from "react";
import styled from "styled-components";

import { basketSlider } from "./mock";
import Color from "../../Helpers/Color";

const SliderContainer = styled.div`
  margin: 45px 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 28px;
  color: #1e1e3c;
`;

const Button = styled.button`
  border: transparent;
  background-color: transparent;
  color: #046d9d;
  font-size: 16px;
`;

const Recommendations = styled.ul`
  margin: 0 12px;
  padding: 0;
  list-style: none;
  display: flex;
  text-align: center;
`;

const Recommendation = styled.li`
  margin-right: 45px;
  width: 200px;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
  }
`;

const RecImg = styled.img`
  width: 200px;
  height: 200px;
`;

const RecPrice = styled.div`
  font-size: 15px;
  margin: 12px 0;
  color: #046d9d;
`;

const DefaultPrice = styled.span``;

const DiscPrice = styled.span`
  color: #4ad9bd;
`;

const FinalPrice = styled.span``;

const RecTitle = styled.span`
  font-size: 14px;
  color: #1e1e3c;
`;

const LatestSlider = styled.button`
  border: transparent;
  background-color: #4ad9bd;
  height: 36px;
  width: 34px;
  cursor: pointer;
  background-image: url("./assets/svg/icon-buttons-slider-left.svg");
  transition: 0.4s ease opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const NextSlider = styled(LatestSlider)`
  background-image: url("./assets/svg/icon-buttons-slider-right.svg");
`;

const Container = styled.div``;

const Colors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: 10px auto;
`;

// Тк не было в ТЗ, то сделал просто как демо
const BasketSlider = () => {
  const [firstPosition, getFirstPosition] = useState(0);

  return (
    basketSlider.length && (
      <SliderContainer>
        {firstPosition > 0 && (
          <LatestSlider onClick={() => getFirstPosition(firstPosition - 1)} />
        )}
        <Container>
          <Header>
            <Title> Мы также рекоммендуем </Title>
            <Button> Смотреть все</Button>
          </Header>
          <Recommendations>
            {basketSlider
              .slice(firstPosition, firstPosition + 3)
              .map(recommendation => (
                <Recommendation key={recommendation.id}>
                  <RecImg
                    src={recommendation.image}
                    alt={recommendation.title}
                  />
                  <RecPrice>
                    {recommendation.disc > 0 ? (
                      <>
                        <DefaultPrice> {recommendation.price} </DefaultPrice>
                        <DiscPrice> - {recommendation.disc} </DiscPrice>
                        <FinalPrice>
                          {" "}
                          = {recommendation.price - recommendation.disc} ₽{" "}
                        </FinalPrice>
                      </>
                    ) : (
                      <DefaultPrice> {recommendation.price} </DefaultPrice>
                    )}
                  </RecPrice>
                  <RecTitle>{recommendation.title}</RecTitle>
                  {recommendation.colors && (
                    <Colors>
                      {recommendation.colors.map((color, index) => (
                        <Color key={index} color={color} />
                      ))}
                    </Colors>
                  )}
                </Recommendation>
              ))}
          </Recommendations>
        </Container>
        {basketSlider.slice(firstPosition, firstPosition + 3).length === 3 && (
          <NextSlider onClick={() => getFirstPosition(firstPosition + 1)} />
        )}
      </SliderContainer>
    )
  );
};

export default BasketSlider;
