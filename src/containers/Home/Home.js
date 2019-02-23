import React, { Component } from 'react';
import Card from '../../components/Card/Card/Card';
import companyData from '../../components/Card/Card/companyData.json';
import NavBar from '../../components/Nav/NavBar';
import { Link } from 'react-router-dom';
import {space} from '../../theme';

import {StyledTitle, 
        StyledParagraph, 
        StyledHeaderContainer,
        StyledAnchor,
        StyledTitleWrapper } from './style';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          // avatar={'https://randomuser.me/api/portraits/women/44.jpg'}
        />
        <div style={{ marginTop: space[6] }}>
          <StyledHeaderContainer>
            <StyledTitleWrapper>
              <StyledTitle>
                Anti
                <br />fragile
                <br />
                UI/UX
              </StyledTitle>
            </StyledTitleWrapper>
            <div style={{marginLeft: space[3], zIndex: '1000'}}>
              <StyledParagraph>
              This project is inspired by <StyledAnchor href="https://speakerdeck.com/vernalkick/antifragile-design" target="_blank">Kevin Clark's talk on Antifragile Design</StyledAnchor> and  <StyledAnchor href="https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680" target="_blank">Nassim Nicholas Taleb's Antifragile book</StyledAnchor>. I've found myself intrigued on how products respond and adapt when things don't go according to plan. I want to try and document some of these flows.
              </StyledParagraph>
            </div>
          </StyledHeaderContainer>
          <section style={{marginBottom: space[6]}}>
            <div>
              {
                companyData.companies.map((company, index) => {
                  return (
                    <Link to="video" style={{textDecoration: 'none', color: 'inherit'}}>
                      <Card
                        title={company.title}
                        subTitle={company.subTitle}
                        flowTitle={company.flowTitle}
                        flowTitle2={company.flowTitle2}
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
