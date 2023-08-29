import React, {Component} from 'react';
import {MAPBOX_STYLES} from './constants/defaults';
import App from './hospitals/app';

import {makeExample} from './components';

const CODE_TYPES = {
  'Current procedural terminology (CPT)': 'txn_amt',
  'HCPCS': 'txn_cnt',
  'MS DRG': 'acct_cnt',
  'APR DRG': 'avg_ticket'
};
const INSURANCE_NAMES = {
  'Blue Cross Blue Shield': 'ret',
  'United': 'app',
  'Medicare': 'aut',
  'Medicare': 'aut',
};
const PROCEDURE_NAMES = {
  'C Section': ['2020-01-01', '2020-01-05'],
  'Insulin': ['2020-01-06', '2020-01-12'],
  'Coronary bypass': ['2020-01-06', '2020-01-12'],
  'Psychotherapy': ['2020-01-13', '2020-01-19'],
};

class CartoSQLDemo extends Component {
  static title = 'Hospitals in the New York Metropolitan area';

  static code = 'https://github.com/onefact/carto-deck.gl-hospital-map';

  static parameters = {
    index: {
      displayName: 'Code type (coming soon)',
      type: 'select',
      options: Object.keys(CODE_TYPES),
      value: 'Total Spend'
    },
    industry: {
      displayName: 'Insurance (coming soon)',
      type: 'select',
      options: Object.keys(INSURANCE_NAMES),
      value: 'Total Retail'
    },
    week: {displayName: 'Procedure (coming soon)', type: 'select', options: Object.keys(PROCEDURE_NAMES), value: 'Week 1'}
  };

  static mapStyle = MAPBOX_STYLES.LIGHT;

  static renderInfo() {
    return (
      <div>
        <p>100+ hospitals in the New York area with quality measures from CMS.</p>
        <p>
          The elevation of the column at a hospital's location shows the median wait time in minutes for that hospital as reported by the Centers for Medicare & Medicaid Services (CMS). We are currently linking this data to price information for each hospital. Email us at <a href="mailto:hello@payless.health">hello@payless.health</a> if you want to help.
        </p>
        <div style={{height: 8, width: '100%', display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: '0 0 14.28%', background: 'rgb(254, 246, 181)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(255, 221, 154)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(255, 194, 133)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(255, 166, 121)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(250, 138, 118)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(241, 109, 122)'}} />
          <div style={{flex: '0 0 14.28%', background: 'rgb(225, 83, 131)'}} />
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '14.28%'}}>100m</div>
          <div style={{width: '14.28%'}}>120m</div>
          <div style={{width: '14.28%'}}>140m</div>
          <div style={{width: '14.28%'}}>160m</div>
          <div style={{width: '14.28%'}}>180m</div>
          <div style={{width: '14.28%'}}>200m</div>
          <div style={{width: '14.28%'}}>220m</div>
        </div>
        <p>
          Data source: <a href="https://data.payless.health/">Payless Health</a>
        </p>
      </div>
    );
  }

  render() {
    const {params} = this.props;
    const index = CODE_TYPES[params.index.value];
    const industry = INSURANCE_NAMES[params.industry.value];
    const week = PROCEDURE_NAMES[params.week.value];

    return <App {...this.props} mrliIndex={index} industry={industry} week={week} />;
  }
}

export default makeExample(CartoSQLDemo);