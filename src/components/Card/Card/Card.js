import React from 'react';
import TextButton from '../../Buttons/TextButton/TextButton';
import Overdrive from 'react-overdrive';
import {space} from '../../../theme';

import { StyledCard, 
         StyledCardWrapper,
         StyledListWrapper } from './style';

const Card = (props) => (
  <article>
    <StyledCard>
      <StyledCardWrapper>
        <Overdrive id="airbnb">
          <h1>{props.title}</h1>
        </Overdrive>
        <p>{props.subTitle}</p>
        <StyledListWrapper>
          <li style={{marginBottom: space[3]}}>
            <TextButton>
              {props.flowTitle}
            </TextButton>
          </li>
          <li>
            <TextButton>
              {props.flowTitle2}
            </TextButton>
          </li>
        </StyledListWrapper>
      </StyledCardWrapper>
    </StyledCard>
  </article>
);

export default Card;