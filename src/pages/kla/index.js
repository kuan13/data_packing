import UncontrolledExample from "./components/tabs"
import { useSearchParams } from "react-router-dom";
import React, { useEffect } from 'react';



function Kla() {
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ 'order_no': 1 });
  const orderno = searchParams.get('order_no');
  console.log(orderno); 

  return (
    <div className="kla">
      <h2>Order NO: {orderno}</h2>
      <UncontrolledExample/>
    </div>
  );
}

export default Kla;