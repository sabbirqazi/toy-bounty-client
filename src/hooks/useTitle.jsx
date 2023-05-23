import { useEffect } from "react"

const useTitle =(title)=>{
   useEffect(()=>{
    document.title = `${title}-ToyBounty`;
   },[title])
}

export default useTitle;