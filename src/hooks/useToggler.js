import {useState} from "react"

function useToggler() {
  const [showDD, setShowDD] = useState(false)

  function handler(){
    setShowDD(prev=> !prev)
  }

  return [showDD,handler]
}

export default useToggler