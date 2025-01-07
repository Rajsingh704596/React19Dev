//todo- 3 types of import export in React.js

//? 1. default import and export:-
//* Default Export- a file can have only one default export
//* Default Import- when importing a default export, we can name the import whatever you like.

//!child component-here we use default export
// const defaultExport=()=>{
//   return 
// }
// export default defaultExport;

//!Parent component- we use import component
// import AnyName from "./ImportExportFile";
// use that component like this inside parent component -  <NameExport/><NameExport2/>

//? 2. Named import and export
//* Named Export- a file can have multiple named export ,Each named export must be explicitly exported
//* Named Import- when importing a named export, the import names must match the export names exactly, and must be enclosed in curly braces

//!Child component- we use named export like this
// export const NameExport=()=>{
//   return
// }
// export const NameExport2=()=>{
//   return
// }

//!Parent component- we use import component like this
// import { NameExport ,NameExport2 } from "./ImportExportFile";
//use that component like this inside parent component - return(<>  <NameExport/><NameExport2/>  </>) 

//? 3. Mixed/Combined import and export

const DefaultExport=()=>{

    return <h3>Default Export use this Component</h3>
}
export default DefaultExport;

export const Name=()=>{
    return <h3>Name Export use this Component</h3>
}

export const Name2=()=>{
    return <h3>Another Name Export use this Component</h3>
}