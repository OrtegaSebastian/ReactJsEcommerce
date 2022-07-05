import { useContext } from 'react'
import{ CarritoContext} from "../contexts/CartContext";

const CarritoItem = ({producto}) => {
    const {delItem} = useContext( CarritoContext);
    const {nombre, precio,id,pictureUrl}= producto;
    return (
    <div style={{margin:("30px","50px","50px","50px") }} className="col-md6" >
        <h4>Producto = {nombre}</h4>
        <h4>{pictureUrl}</h4>
        <h4>Precio = {precio}</h4>
        <button onClick={()=> delItem(id)}>borrar item</button>
    </div>
    )
}

export default CarritoItem