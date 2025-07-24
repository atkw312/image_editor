import { useRef, useState } from 'react';
import { tools } from './tools';
import './Toolbar.css'
import { RenderSettings } from './RenderSettings';
import { Rect, Canvas, FabricImage } from 'fabric';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'


interface ToolbarProps {
    canvas: Canvas | null;
  }

const Toolbar: React.FC<ToolbarProps> = ({canvas}) => {
    
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

    };
    
    const handleZoomOut = () => {

    };

    const handleImage = (imgName: string) => {
      if (canvas) {
        let imageElement = document.createElement('img');
        imageElement.src = imgName;
        imageElement.onload = function () {
          const image = new FabricImage(imageElement, {
            left: 100,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5,
          });
          canvas.add(image)
          canvas.centerObject(image)
          canvas.setActiveObject(image)
          canvas.renderAll()
          console.log('hello')
        }
      }
    }

    const testImages = [
      { imgSrc: img1 },
      { imgSrc: img2 },
      { imgSrc: img3 },
      { imgSrc: img1 }
    ]

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
        <div className={`toolbar ${sidebarHover ? 'expanded' : 'collapsed'}`}
            onMouseOver={() => setSidebarHover(true)}
            onMouseOut={() => setSidebarHover(false)}>
          {tools.map((tool, i) => (
            <div key={i} className="toolbar-button-container">
              <button
                className={`toolbar-button ${tool.func === currentSelection || tool.func === currentMode ? 'selected' : 'deselected'}`}
                onClick={() => handlers[tool.func]?.()}>
                <div className="toolcard">
                  <div className="toolbar-img-container">
                    <img src={tool.imgSrc} alt={tool.name} />
                  </div>
                  <div className={`collapsable ${sidebarHover ? 'expanded' : 'collapsed'}`}>
                    <p>{tool.name}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Media Left Panel */}
        {currentMode === 'Media' && selectedToggle && (
          <div className="collapsable-settings l">
            <div className="settings-title">
              <h2>Media</h2>
              <button onClick={() => setSelectedToggle(false)}>x</button>
            </div>
            <div className="media-settings-container">
              <button onClick={() => console.log('Upload image')}>Upload Image</button>
              <div className="media-settings">
                {testImages.map((img, i) => (
                  <div key={i}>
                    <img src={img.imgSrc} onClick={() => handleImage(img.imgSrc)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right Settings Panel */}
        <div className="right-toolbar">
          <div className="collapsable-settings r expanded">
            <div className="layers">
              <h2>Layers</h2>
              <div className="layers-list-container">
                {testImages.map((img, i) => (
                  <div className="layer-container" key={i}>
                    <img className="layer-img" src={img.imgSrc} onClick={() => handleImage(img.imgSrc)} />
                    <p>Layer {i}</p>
                  </div>
                ))}
              </div>
            </div>
            <RenderSettings
              currentMode={currentMode}
              setSelectedToggle={setSelectedToggle}
            />
          </div>
        </div>
      </div>
    );
};

export default Toolbar;