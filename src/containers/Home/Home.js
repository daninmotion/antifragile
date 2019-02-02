import React, { Component } from 'react';
import Card from '../../components/Card/Card/Card';
import companyData from '../../components/Card/Card/companyData.json';

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
                    <Card
                      title={company.title}
                      subTitle={company.subTitle}
                      flowTitle={company.flowTitle}
                      key={index}
                    />
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
