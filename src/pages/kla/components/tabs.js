import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BasicExample from './table';
import Charts from './charts'
import data from '../waferdata.json'
import { Box, VStack, Center, Button } from '@chakra-ui/react'
import Wafermap from './wafermap'
import React, { useState, useEffect } from 'react';

const UncontrolledExample = () => {
  const [waferIdx, setWaferIdx] = useState(0)
  var dimensions = {'width': 400, 'height': 400}

  function nextWafer() {
    waferIdx === (data.length - 1) ?
      setWaferIdx(0) : setWaferIdx(waferIdx + 1)
  }

  return (
    <div>
    <h1>KLA資料打包</h1>  
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="tab1" title="主頁">
        <BasicExample />
      </Tab>
      <Tab eventKey="tab2" title="wafermap">
        <Box>
        <Center>
          <VStack>
            <Wafermap
              points={data[waferIdx].points}
              configuration={dimensions}
            />
            <Button onClick={nextWafer}>Next wafer</Button>
          </VStack>
        </Center>
      </Box> 
      </Tab>
      <Tab eventKey="tab4" title="test">
        <Charts />
      </Tab>      
      <Tab eventKey="tab5" title="others" disabled>
        <BasicExample />
      </Tab>
    </Tabs>
    </div>
  );
}

export default UncontrolledExample;