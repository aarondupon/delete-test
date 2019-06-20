import React, {useContext, useReducer} from "react";



let initialState = {
  count: 10,
  currentColor: "#bada55",
  width:1000,
};
const DocumentContext = React.createContext({});

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "set-color":
      return { ...state, currentColor: action.payload };
  }
};

// function DocumentContextProvider(props) {
//   // [A]
//   let [state, dispatch] = React.useReducer(reducer, initialState);
//   let value = [state, dispatch];
//   // [B]
//   return (
//     <DocumentContext.Provider value={value}>{props.children}</DocumentContext.Provider>
//   );
// }
export const DocumentContextProvider = ({ initialState, children}:any) =>(
  <DocumentContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DocumentContext.Provider>
);

let DocumentContextConsumer = DocumentContext.Consumer;
export const useDocument = () => useContext(DocumentContext);

// [C]
export { DocumentContext, DocumentContextConsumer };

export default DocumentContext;