import React from 'react'
import './Services.css'
import serviceOne from '../../assets/italianFood.jpg';
import serviceTwo from '../../assets/chineseFood.jpg';
import serviceThree from '../../assets/indianFood.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faBowlFood, faPepperHot } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
  return (
    <div className="services">

      <div className="service">
        <img src={serviceOne} alt="" />
        <div className="caption">
        <FontAwesomeIcon icon={faPizzaSlice} id='icon'/>
        <p>Italian</p>
    </div>
      </div>

      <div className="service">
        <img src={serviceTwo} alt="" />
      <div className="caption">
      <FontAwesomeIcon icon={faBowlFood} id='icon'/>
        <p>Chinese</p>
    </div>
      </div>

      <div className="service">
        <img src={serviceThree} alt="" />
      <div className="caption">
      <FontAwesomeIcon icon={faPepperHot} id='icon'/>
        <p>Indian</p>
    </div>
    </div>

    </div>
  )
}

export default Services
