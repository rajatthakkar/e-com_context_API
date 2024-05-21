import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };
  const resetValue = ()=>{
     if(item===0 && total ===0){
        return
     }
         setItem(0)
         setTotal(0)
  }
  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove,resetValue}}>
      {children}
    </itemContext.Provider>
  );
}

export {  useValue };
export default CustomItemContext;
