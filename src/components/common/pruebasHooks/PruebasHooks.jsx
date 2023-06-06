import { useState, useEffect } from "react"



const PruebasHooks = ({contador, setContador}) => {

  let imagenesVarias = [
    "https://images.pexels.com/photos/17082890/pexels-photo-17082890/free-photo-of-ojo-del-valle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16965658/pexels-photo-16965658/free-photo-of-mar-playa-vacaciones-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16316489/pexels-photo-16316489/free-photo-of-mar-paisaje-playa-vacaciones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  const [img,setImg] = useState("")

  //useEfect : permite ejecutar el codigo cuando algo se monta,es decir que el usuario entro a ese componente. Recibe dos parametros, 1 CallBack (dentro va todo lo que sucedera cuando un componente se monta)y 2 un Arreglo de Dependencias(aqui especificamos cuando y cuantas veces se reenderizara el useeffect, que variable escuchara).

  useEffect(()=>{
    setImg(imagenesVarias[contador])
  }, [contador])

  return (
    <div>
      <h4>{contador}</h4>
      <button onClick={ ()=> setContador(contador + 1)}>Aumentar</button>
      <button onClick={ ()=> setContador(contador - 1)}>Disminuir</button>

      {/* <button onClick={()=> setImg(imagenesVarias[2])}>Traer Imagen</button>
      <button onClick={()=> setImg("")}>Borrar Imagen</button> */}
      <img src={img} alt="" />
    </div>
  )
}

export default PruebasHooks