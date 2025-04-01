import React from 'react';
import './ActusItem.css';
import {useNavigate} from "react-router-dom";
import { useAuthentication } from '../userauthentification';

function ActusItem(props) {

  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate('/login')
  };

  const handleClick = () => {
    const constructedURL = `/newsdetail?newsImg=${encodeURIComponent(props.src)}&newsType=${encodeURIComponent(props.label)}&newsTitle=${encodeURIComponent(props.title)}&newsDescription=${encodeURIComponent(props.description)}`;
    navigate(constructedURL);
   
  };

  

  return (
    <>
                    
      <li className='cards__item' onClick={handleClick} >
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
        </div>
      </li>
     
    </>
  );
}

export default ActusItem;