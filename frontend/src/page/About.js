
import React, { useEffect, useState } from 'react';

const About= ()=> {
  const [x, setX] = useState(false);
const test = () => {
  setX(!x);
}
useEffect(()=>{
  console.log(x);
},[x])
  return (

    <div>
       <div variant='contained' onMouseEnter={test}>
          Save
       </div>
    </div>
  );
}

export default About;
