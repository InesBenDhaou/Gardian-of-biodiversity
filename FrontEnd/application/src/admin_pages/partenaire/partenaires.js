import React, { useState, useEffect } from 'react';

import add from "../../images/icons/add-circle-svgrepo-com.svg";
import show from "../../images/icons/show-eye-svgrepo-com.svg";
import update from "../../images/icons/update.svg";
import del from "../../images/icons/delete-svgrepo-com.svg";
import AddPartenaire from './addPartenaire';
import DeletePartenaire from './deletePartenaire';
import UpdatePartenaire from './updatePartenaire';
import PartenairesPublic from '../../pages/partenaires/partenaire_public/Partenaires_Public';
import PartenairesAssociative from '../../pages/partenaires/partenaire_association/partenaires-associative';
import PartenairesEntreprise from '../../pages/partenaires/partenaire_entreprise/Partenaires_Entreprise';

function PartenairesAdmin() {

    const [componentToShow, setComponentToShow] = useState(null);

    const handleClick = (component) => {
        setComponentToShow(component);
    };


    return (

<>
{componentToShow === 'add' && <AddPartenaire />}
{componentToShow === 'show' && <><PartenairesPublic/><PartenairesAssociative/><PartenairesEntreprise/></>}
{componentToShow === 'update' && <UpdatePartenaire/>}
{componentToShow === 'delete' && <DeletePartenaire/> }

{!componentToShow && (
    <div  className='section_news_admin'>
        <h1 className='section__news__title'>PARTNERS SECTION </h1>
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

export default PartenairesAdmin;
