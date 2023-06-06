import { useState } from "react"
import Navbar from "../../common/nabvar/nabvar";
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks";


export const Home = ()=>{

  const [contador , setContador] = useState(0)


  return(
    <>
      <Navbar/>
      <PruebasHooks contador={contador} setContador={setContador}/>
     

     
      
    </>  
  );
    
}