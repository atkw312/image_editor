import './Toolbar.css';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'



interface RenderSettingsProps {
  currentMode: string;
  setSelectedToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RenderSettings: React.FC<RenderSettingsProps> = ({
  currentMode,
  setSelectedToggle,
}) => {
  switch (currentMode) {
    case 'Paint':
      return (
        <div className="settings-container">
          <div className="settings-title">
            <h2>Paint</h2>
            <button onClick={() => setSelectedToggle(false)}>x</button>
          </div>
          <div className="settings-content">
            <label>Brush Size:</label>
            <input type="range" min="1" max="50" />
          </div>
        </div>
      );


    case 'Eraser':
      return (
        <div className="settings-container">
          <div className="settings-title">
            <h2>Eraser</h2>
            <button onClick={() => setSelectedToggle(false)}>x</button>
          </div>
          <div className="settings-content">
            <label>Eraser Size:</label>
            <input type="range" min="1" max="50" />
          </div>
        </div>
      );

    case 'Text':
      return (
        <div className="settings-container">
          <div className="settings-title">
            <h2>Text</h2>
            <button onClick={() => setSelectedToggle(false)}>x</button>
          </div>
          <div className="settings-content">
            <div className='font-size-container'>
              <label>Font Size:</label>
              <input type="number" min="8" max="72" defaultValue={16} />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
