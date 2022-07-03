import {  CarritoContext } from "../contexts/CartContext";
import { useContext } from "react";
import CarritoItem from "./CartItem";

const Carrito = () => {
  const { carrito , VaciarCarrito, PrecioTotal, IconCart } = useContext( CarritoContext);
  
  // function generarOrden(e) {
  //   e.PreventDefaul()
  //   let orden ={}

  //   orden.buyer = {producto: 'algo', email: 'nada', numero: '12345'}
  //   orden.total = precioTotal();
    
  //   orden.items = cartList.map(carItem=>
  //     const id = carritoItem.id
  //     const nombre = carritotem.nombre
  //     const precio = carritoItem.precio * carritoItem.cantidad
      

  //     )

    
  // }
  

  return (
    <>
    <div >
    {carrito.length < 1 ? (
        <p>Carrito vacio</p>
    ) : (
        carrito.map((producto) => 
        <CarritoItem key={producto.item.id} producto={producto.item} />)
        )}
    </div>
    <button onClick={VaciarCarrito}> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    {IconCart() < 1 ? 
    <p> </p>
    :<p>La cantidad total del carrito es {IconCart()}</p>
    }
    </>
  );
};

export default Carrito;
