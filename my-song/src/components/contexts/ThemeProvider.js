import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {


  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
};
{/*
  const context = createContext()

  export contextProvider = ( {child}) => {

    const [ value, setValue] = useState()
    return (
      <context.Provider value={ value, setValue}>
        {child}
      </context.Provider>
    )
  }
  export useContext = useContext(context)
*/}