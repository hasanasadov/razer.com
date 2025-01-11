import React from 'react'
import "./Loader.scss"
import RingLoader from "react-spinners/RingLoader"
function Loader() {
  return (

<div className='loader'>
<RingLoader size={80} color="#66b933" />
</div>

  )
}

export default Loader
