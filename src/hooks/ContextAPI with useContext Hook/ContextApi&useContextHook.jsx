//! ContextAPI - it's problem solving of prop drilling

//# ContextApi :- A way to pass data(values like state, functions any other data) through the component tree without having to pass props down manually at every level.
  
  //todo- ContextAPI 3 important process we must know:-
 
  //$ 1. createContext: Creates a Context object using createContext() method  (it's like Warehouse/store) (define in Parent Component)
  //$ 2. Provider: A Component that provides the context value to its children.(it's like delivery man )( define in Parent Component )
  //$ 3. useContext: A hook that allows you to consume a context.(Consumer like house where delivery data will accept)(define in Child Component)

//@ Full Process-
    //^ Initial Value: we don't pass an initial value directly to the context.

    //^ Context Creation: "createContext() method returns a Context Component, not a variable".'The first letter of the Context component's name must be Uppercase.'

    //^ Provider Component: The Provider is a property of the Context Component. We 'pass the value to the Provider', which makes it accessible to child components.The value should be passed inside "double curly braces {{}} " if it is more than one.

    //^ Consuming Context Data: To access the context data, we use the useContext hook. As a parameter,we pass the entire context to useContext to access all values provided by the Provider.

//! Note-
//todo- In the Context API, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component that needs access to the context data must be a descendant of the provider component that supplies the context value.   