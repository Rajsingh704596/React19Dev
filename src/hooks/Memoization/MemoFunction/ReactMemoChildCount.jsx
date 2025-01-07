//! memo function ko 2 types se use kar sk te hai

import {memo,useRef} from 'react'
 export const ReactMemoChildCount1=()=>{

    const data=useRef(0);    //useRef se data change hone pr bhi component re-render nhi ho ga

    console.log(data);        //o/p-  {current: 0}

    return(
        <h2>child component render {data.current+1} time(s) </h2>
     //useRef gives object so we can get that value like this data.current or when component render value will increase
    )

}

//$ first way when component export default so component export default m memo fun. wrap kar ke 

const ReactMemoChildCount2=()=>{

    const data=useRef(0);    //useRef se data change hone pr bhi component re-render nhi ho ga

    console.log(data);        //o/p-  {current: 0}

    return(
        <h2>child component render {data.current+1} time(s) </h2>
     //useRef gives object so we can get that value like this data.current or when component render value will increase
    )

}

// export default (ReactMemoChildCount);      //iss case m parent k sa th child component bhi baa_r baa_r re-render ho ga

  export default memo(ReactMemoChildCount2);    //@ here memo function use and wrap child component

//  //todo- jb parent component k an_der multiple child component pass kar rhe us child component koi bhi re-render nhi ka re jb tk us_ka props change na ho,bha_le hi parent component kit_ni baa_r bhi re-render ho to memo function ka use ka-rte hai jo only first time hi component ko render ho ga


//$ Second way- component naming export time memo method wrap like this-

// eslint-disable-next-line react/display-name
export const ReactMemoChildCount3=memo(()=>{      //here memo method wrap       

    const data=useRef(0);    //useRef se data change hone pr bhi component re-render nhi ho ga

    console.log(data);        //o/p-  {current: 0}

    return(
        <h2>child component render {data.current+1} time(s) </h2>
     //useRef gives object so we can get that value like this data.current or when component render value will increase
    )

});

