import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState();
  const [create, setCreate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/playlists").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return <DataContext.Provider value={{data, setData, create, setCreate}}>{props.children}</DataContext.Provider>;
};
{
  /*
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
*/
}
