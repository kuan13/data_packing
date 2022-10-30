import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BasicExample from './table';

const UncontrolledExample = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="tab1" title="主頁">
        <BasicExample />
      </Tab>
      <Tab eventKey="tab2" title="wafermap">
        <BasicExample />
      </Tab>
      <Tab eventKey="tab3" title="others" disabled>
        <BasicExample />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;