import { useState } from 'react';

const Componente = () => {
    const [ count, setCount ] = useState(0)
    setTimeout(()=>{
        setCount(count+1);
      },3000)
      
    return (
        <div>
            <h1>Componente {count}</h1>
        </div>
    )
}
export default Componente;