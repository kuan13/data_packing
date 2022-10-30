import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BasicExample from './table';
import Charts from './charts'

const UncontrolledExample = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="tab1" title="主頁">
        <BasicExample />
        <Charts />
      </Tab>
      <Tab eventKey="tab2" title="wafermap">
        <BasicExample />
      </Tab>
      <Tab eventKey="tab4" title="test">
        <Charts />
      </Tab>      
      <Tab eventKey="tab5" title="others" disabled>
        <BasicExample />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;