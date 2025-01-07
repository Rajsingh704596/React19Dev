//! React.memo() v/s useMemo hook -

//^ Memo function tb work nhi kar ta hai jb object as props child ko pass ho rha hai (jb ki object change nhi ho rha hai ) , normal props jis me direct value pass ho rha hai tb work kar ja ta hai agar props change nhi ho rha hai, is ka reason hai object haar baa-r new reference m save ho ta hai jb bhi parent component re-render ho ta hai ,to memo fun. always props k reference ko check kart_a hai jb use lg_ta hai props reference change hua hai to child component ko re-render kar det_a hai 
//^ Is li ya ha useMemo hook bhi use kar na pad_ga kyu ki wo constant value ko optimize kar ke cache m save kar de ta hai(or expensive calculation ko bhi). jis se obj reference bhi change nhi ho ga or memo fun. bhi shi work kar_ega kyu_ki koi props change nhi ho rha tha child component bhi re-render nhi ho_ga parent component ki waj_ah se 


import { useMemo, useState } from "react";

import { ChildRender1, ChildRender2 } from "./ChildRender";

export const ReactMemoVsUseMemoHook = () => {
  const [count, setCount] = useState(0);

  // const myBioData={
  //   name:"Rock",
  //   age:20,
  // }
 
  //^ useMemo hook used here for object optimized
  const myBioData = useMemo(() => {
    //@Note-value ko return kar na must hai useMemo hook me
    return {               
      name: "Rock",
      age: 20,
    };
  }, []);

  return (
    <> 
       <h2>useMemo used for object and work with memo method</h2>
      <div className="flex flex-col items-center justify-center p-4 tracking-wider h-52 font-display ">
        <h1>{count}</h1>
        <button
          className="px-3 py-1 btn bg-cyan-500"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <ChildRender1 bioData={myBioData} />  {/*object har bar new memory m store ho ga so reference bhi change ho ga, lek_in useMemo hook se ab obj optimized ho gaya or us ka reference bhi change nhi ho ga*/}
      <ChildRender2 bioData={myBioData} />

      {/* here myBioData object first time render hone pr khi na khi store hua ho ga or after click button again component render hone pr ph-ir se object memory m khi or store ho ga to ,ab ChildRender1 component bhi re-render , or ChildRender2 component bhi re-render ho jay-ega kyu-ki Memo method reference ko check kar-ta hai props ki jo ki change ho ga yi object k case m is li ye wo re-render ho ga , but is se bac=hne k li ye hm ne object value useMemo hook m store kar di ya ab obj value optimized ho ga yi so childComponent 2 re-render nhi ho ga*/}
  
    </>
  );
};
