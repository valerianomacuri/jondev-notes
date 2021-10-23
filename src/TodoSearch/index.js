import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }


  return (
    <input value={ searchValue } onChange={(e) => onSearchValueChange(e) } className="TodoSearch" placeholder="Buscar un TODO" />
  );
}

export { TodoSearch };
