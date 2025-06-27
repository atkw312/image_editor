import React, {useEffect, useRef, useState} from 'react'
import './Edit.css'
import Canvas from './Canvas'
import Toolbar from '../../components/toolbar/Toolbar'

const EditPage = () => {

  const [baseWidth, setBaseWidth] = useState(850);
  const [baseHeight, setBaseHeight] = useState(1200);
  const [scale, setScale] = useState(0.5);
  // const [bgColor, setBgColor] = useState();



  return (
    <div className='editpage'>
      <Toolbar scale={scale} setScale={setScale}/>
      <Canvas
        width={baseWidth}
        height={baseHeight}
        scale={scale}
      />
    </div>
  )
}

export default EditPage
