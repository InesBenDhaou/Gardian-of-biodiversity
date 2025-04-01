import { useLocation } from 'react-router-dom';
import './Newsdetails.css';
import NavBar from '../../navigationBar/NavBar'

function Newsdetails (){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    return (
         <section style={{ backgroundImage: `url(${queryParams.get('newsImg')})` }} className="news__details__container" >
            <NavBar />
            <div className="news__details__content">
                <h1 className='news__title'><span className='news__type'>{queryParams.get('newsType')}</span> : {queryParams.get('newsTitle')} </h1>
                <p className='news__description'>{queryParams.get('newsDescription')}</p>
            </div>
         </section>
    );
}

export default Newsdetails ;