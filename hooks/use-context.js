import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const useGlobalContext = () => {
  return useContext(AppContext)
}

export default useGlobalContext;