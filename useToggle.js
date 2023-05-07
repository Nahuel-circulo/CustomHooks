import { useCallback, useState } from "react";
export const useToggle = (itinialState = false) => {
  //inicializa el estado
  const [state, setState] = useState(itinialState);

  //useCallback hace que se guarde la funcion en memoria
  // y no se vuelva a crear
  
  const toggle = useCallback(() => {
    setState((state) => !state);
  });

  return [state, toggle];
};
