import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}`);
  };


  return (
    <div className='header-bar'>
      <div className='header-left'>
        <img src={logo} alt='Logo' className='logo'/>
        <select onChange={handleChange} className='selector'>
          <option value=''>Home</option>
          <option value='edit'>Edit</option>
        </select>
      </div>
      <div>
        {/* <button className='header-zoom' onClick={handleZoomOut}>Out</button> */}
        Profile
      </div>
    </div>
  )
}

export default Header
