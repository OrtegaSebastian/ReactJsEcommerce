import { useContext } from 'react'
import{ CarritoContext} from "../contexts/CartContext";

const CarritoItem = ({producto}) => {
    const {delItem} = useContext( CarritoContext);
    const {nombre, precio,id}= producto;
    return (
    <div>
        <h4>{nombre}</h4>
        <h4>{precio}</h4>
        <button onClick={()=> delItem(id)}>borrar item</button>
    </div>
    )
}

export default CarritoItem