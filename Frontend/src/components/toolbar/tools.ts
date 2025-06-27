import crop from '../../assets/crop.svg';
import cursor from '../../assets/cursor.svg';
import eraser from '../../assets/eraser.svg';
import pen from '../../assets/pen.svg';
import retouch from '../../assets/retouch.svg';
import text from '../../assets/text.svg';
import zoomin from '../../assets/zoomin.svg';
import zoomout from '../../assets/zoomout.svg';
import media from '../../assets/media.svg';

export const tools = [
    { name: 'Move & Resize', imgSrc: cursor, func: 'MoveResize' },
    { name: 'Crop', imgSrc: crop, func: "Crop"},
    { name: 'Retouch', imgSrc: retouch, func:"Retouch" },
    { name: 'Paint', imgSrc: pen, func: "Paint" },
    { name: 'Eraser', imgSrc: eraser, func:"Eraser" },
    { name: 'Text', imgSrc: text, func: "Text" },
    { name: 'Media', imgSrc: media, func: "Media" },
    { name: 'Zoom In', imgSrc: zoomin, func: "ZoomIn" },
    { name: 'Zoom Out', imgSrc: zoomout, func: "ZoomOut" },
  ];

