import {use, useState} from 'react';
import { tools } from './tools';
import './Toolbar.css'
import { RenderSettings } from './RenderSettings';


interface ToolbarProps {
    scale: number;
    setScale: React.Dispatch<React.SetStateAction<number>>;
  }

const Toolbar: React.FC<ToolbarProps> = ({scale, setScale}) => {
    
    const [ sidebarHover, setSidebarHover ] = useState(false);
    const [ selectedToggle, setSelectedToggle ] = useState(false);
    const [ currentMode, setCurrentMode ] = useState('Paint');
    const [ currentSelection, setCurrentSelection ] = useState('');

    const handleMoveResize = () => {
      setCurrentMode('MoveResize');

      setSelectedToggle(false);

      console.log(currentMode);      
    };
      
    const handleCrop = () => {
      setCurrentMode('Crop');
      setSelectedToggle(false);

      console.log(currentMode);        
    };
    
    const handleRetouch = () => {

      setCurrentMode('Retouch');
      setSelectedToggle(false);

      console.log(currentMode);      
    };
    
    const handlePaint = () => {
      if (!selectedToggle) {
        setCurrentMode('Paint');
        setSelectedToggle(true);
      } else if (selectedToggle && currentMode !== 'Paint') {
        setCurrentMode('Paint');
      } else {
        setSelectedToggle(false);
      }
      console.log(currentMode);
    };
    
    const handleEraser = () => {
      if (!selectedToggle) {
        setCurrentMode('Eraser');
        setSelectedToggle(true);
      } else if (selectedToggle && currentMode !== 'Eraser') {
        setCurrentMode('Eraser');
      } else {
        setSelectedToggle(false);
      }
      console.log(currentMode);
    };
    
    const handleText = () => {
      if (!selectedToggle) {
        setCurrentMode('Text');
        setSelectedToggle(true);
      } else if (selectedToggle && currentMode !== 'Text') {
        setCurrentMode('Text');
      } else {
        setSelectedToggle(false);
      }
      console.log(currentMode);
    };

    const handleMedia = () => {
      if (!selectedToggle) {
        setCurrentMode('Media')
        setSelectedToggle(true)
      }
      else if (selectedToggle && currentMode !== 'Media') {
        setCurrentMode('Media')
      }
      else {
        setSelectedToggle(false)
      }
      console.log(currentMode);
    };   

    const handleZoomIn = () => {
      setScale(scale + 0.10)
      console.log(`zoomin + ${scale}`);
    };
    
    const handleZoomOut = () => {
      if (scale > 0.25){
          setScale(scale - 0.10)
      }
      console.log(`zoomout + ${scale}`);
    };

    const handlers: Record<string, () => void> = {
        MoveResize: handleMoveResize,
        Crop: handleCrop,
        Retouch: handleRetouch,
        Paint: handlePaint,
        Eraser: handleEraser,
        Text: handleText,
        Media: handleMedia,
        ZoomIn: handleZoomIn,
        ZoomOut: handleZoomOut,
    };
    return (
        <div>
            <div className={`toolbar ${sidebarHover ? 'expanded' : 'collapsed'}`} onMouseOver={() => setSidebarHover(true)} onMouseOut={() => setSidebarHover(false)}>
              {/* <div className={`toolbar-container ${sidebarHover ? 'expanded' : 'collapsed'}`}> */}
                {tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className='toolbar-button-container'>
                    <button className={`toolbar-button ${tool.func === currentSelection || tool.func === currentMode ? 'selected' : 'deselected'}`}
                      onClick={() => handlers[tool.func]?.()}>
                          <div className='toolcard'>
                              <div className='toolbar-img-container'>
                                  <img src={tool.imgSrc} alt={tool.name} />
                              </div>
                              <div className={`collapsable ${sidebarHover ? 'expanded' : 'collapsed'}`}>
                                  <p>{tool.name}</p>
                              </div>
                          </div>
                      </button>
                  </div>
                  ))}
              {/* </div> */}
            </div>
            <div className={`collapsable-settings ${selectedToggle ? 'expanded' :  'collapsed'}`}>
                {<RenderSettings currentMode={currentMode} setSelectedToggle={setSelectedToggle}/>}
              </div>
        </div>
    );
};

export default Toolbar;