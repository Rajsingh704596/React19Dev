//# Creating custom hooks in React is a powerful way to encapsulate logic and make your components cleaner and more maintainable.

//! Rules for Custom Hook-
  //^1. Prefix with use:- Custom hooks must start with the word use. This convention ensures that hooks are easily identifiable.
  //^2. Use Built-in Hooks:- Custom hooks should be utilize React's build-in hooks( e.g useState, useEffect, useContext) to leverage React's state and lifecycle features.(In 90% case we use normal hook inside custom hook for simplify that hook)
  //^3. Avoid Side Effects Outside Hooks:- Side effects( e.g. data fetching, subscriptions) should be managed within hooks using useEffect or other appropriate hooks.
  //^4. Keep Hooks Pure:- Hooks should be free from side effects and return values or function that component can use.


  