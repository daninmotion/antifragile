import React from 'react';
import TextButton from '../../Buttons/TextButton/TextButton';
import { StyledCard, 
         StyledCardWrapper,
         StyledListWrapper } from './style';

const Card = (props) => (
  <article>
    <StyledCard>
      <StyledCardWrapper>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <StyledListWrapper>
          <li>
            <TextButton>
              {props.flowTitle}
            </TextButton>
          </li>
        </StyledListWrapper>
      </StyledCardWrapper>
    </StyledCard>
  </article>
);

export default Card;