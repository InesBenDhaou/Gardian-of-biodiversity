import React, { useState, useEffect } from 'react';
import '../../Homepages/news/news.css';
import add from "../../../images/icons/add-circle-svgrepo-com.svg";
import show from "../../../images/icons/show-eye-svgrepo-com.svg";
import update from "../../../images/icons/update.svg";
import del from "../../../images/icons/delete-svgrepo-com.svg";


import Parc from '../../../pages/descoverAndProtection/parcs/Parcs';
import UpdateParc from './updateparc';
import AddParc from './addparc';
import DeleteParc from './deleteparc';

function ParcAdmin() {

    const [componentToShow, setComponentToShow] = useState(null);

    const handleClick = (component) => {
        setComponentToShow(component);
    };


    return (
        <>
            {componentToShow === 'add' && <AddParc />}
            {componentToShow === 'show' && <Parc />}
            {componentToShow === 'update' && <UpdateParc />}
            {componentToShow === 'delete' && <DeleteParc/> }

            {!componentToShow && (
                <div  className='section_news_admin'>
                    <h1 className='section__news__title'>PARCS SECTION </h1>
                    <div className="main">
                        <div className="up">
                            <button className="card1" onClick={() => handleClick('add')}>
                                <img src={add} className="add" />
                            </button>
                            <button className="card2">
                                <img src={del} className="delete" onClick={() => handleClick('delete')} />
                            </button>
                        </div>
                        <div className="down">
                            <button className="card3">
                                <img src={show} className="show" onClick={() => handleClick('show')} />
                            </button>
                            <button className="card4">
                                <img src={update} className="update" onClick={() => handleClick('update')} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ParcAdmin;
