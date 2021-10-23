import React from 'react';
import { TodoPrivider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {

  
  // No se debe llamar al actualizador del estado dentro de un componente, 
  // porque crea un bucle que renderiza y ejecuta el componente una y otra vez,
  // es recomendable llamar al actulizador del estado dentro de un condicional una función, etc.

  // const [nombre, saveNombre] = useLocalStorage('NOMBRE_1', 'Fernando')
  // saveNombre('Leonardo Valeriano')
  // console.log(nombre)
 
  


  return (

      <TodoPrivider>
        {/* <p>{nombre}</p> */}
        <AppUI/>
      </TodoPrivider>

  );
}

export default App;
