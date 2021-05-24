import { useContext } from 'react';
import GifsContext from '../context/GifsContext';

const useGlobalGifs = () => {
  // const { gifs } = useContext(GifsContext)
  // return gifs;
  
  // es lo mismo que arriba
  return useContext(GifsContext).gifs
}

export default useGlobalGifs;