import React, { Component } from 'react';
import Card from '../../components/Card/Card/Card';
import companyData from '../../components/Card/Card/companyData.json';
import { Link } from 'react-router-dom';

import {StyledTitle, 
        StyledParagraph, 
        StyledHeaderContainer,
        StyledAnchor} from './style';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: '128px' }}>
        <StyledHeaderContainer>
          <div>
            <StyledTitle>
              Anti
              <br />fragile
              <br />
              UI/UX
            </StyledTitle>
          </div>
          <div style={{marginLeft: '32px'}}>
            <StyledParagraph>
            This project is inspired by <StyledAnchor href="https://speakerdeck.com/vernalkick/antifragile-design" target="_blank">Kevin Clark's talk on Antifragile Design</StyledAnchor> and  <StyledAnchor href="https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680" target="_blank">Nassim Nicholas Taleb's Antifragile book</StyledAnchor>. I've found myself intrigued on how products respond when things don't go according to plan. I want to try and document some of these flows.
            </StyledParagraph>
          </div>
        </StyledHeaderContainer>
          <section>
            <div>
              {
                companyData.companies.map((company, index) => {
                  return (
                    <Link to="video" style={{textDecoration: 'none', color: 'inherit'}}>
                      <Card
                        title={company.title}
                        subTitle={company.subTitle}
                        flowTitle={company.flowTitle}
                        key={index}
                      />
                    </Link>
                  )
                })
              }
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
