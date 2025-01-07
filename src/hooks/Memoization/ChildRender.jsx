import {memo,useRef} from 'react'


//todo- without any memoized method
export const ChildRender1=({bioData})=>{      //here memo method wrap       

    const data=useRef(0);    //useRef se data change hone pr bhi component re-render nhi ho ga

   // console.log(data);        //o/p-  {current: 0}

    return(
     <> 
        <h2>child component render {data.current ++} time(s) with without any memoized method</h2>
     {/* useRef gives object so we can get that value like this data.current or when component render value will increase */}
     <p>My name is {bioData.name}</p>
     </>
    )

};


//todo- Memo method with object
// eslint-disable-next-line react/display-name
export const ChildRender2 = memo(({ bioData }) => {
  const renderCount = useRef(0);
  // console.log(renderCount);    //{current: 0}

  return (
    <div className="mt-3 text-center font-display">
      <p>  Memo method with object not work properly </p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current+1} time(s)</span>
        <p>My name is {bioData.name}</p>
     
    </div>
  );
});

// export default memo(ChildRender2);

