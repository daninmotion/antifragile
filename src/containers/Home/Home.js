import React, { Component } from 'react';
import Card from '../../components/Card/Card/Card';
import companyData from '../../components/Card/Card/companyData.json';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: '128px' }}>
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
