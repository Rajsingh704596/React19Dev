//! we don't have for loop in jsx, so we use .map() method of array(Higher order functions)
//todo- map method is basically higher order function 
//* Syntax-    return(
//                       <ul>
//                         {array_name?.map((curElem,index)=>(
//                             <li key={index}>{curElem}</li>
//                         ))}
//                       </ul>
//                     );

//?key rule-- 1. Always Pass key props in <li>/parent component
//?           2. React.js uses key to differentiate each elements, so that it can remove or edit correct element when a students gets added or removed
//?           3. we can use array in jsx , using map method 
