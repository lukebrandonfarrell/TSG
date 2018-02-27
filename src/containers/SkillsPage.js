import React from 'react';
import PageTemplate from './PageTemplate';
import Title from '../components/Title';

class SkillsPage extends React.Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="narrow-wrapper p-top30 p-bottom30">
            <Title label='Skills' />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default SkillsPage;
