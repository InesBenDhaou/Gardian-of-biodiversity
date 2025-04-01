import {React,useState,useEffect} from 'react';
import ActusItem from './ActusItem';
import './ActusItem.css';
import { NewsApi } from '../../api/news.api';
function Actus() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    NewsApi.getAllNews().then((newNews) => {
      setnews(newNews);
    });
  }, []);

  return (
   <section className="news__section">
    <div className='cards'>
      <h1 className='section__news__title'>OUR CURRENT NEWS !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        {news.map((slide) => (
          <ul className='cards__items'>
            <ActusItem
              src={'data:image/png;base64,' +slide.image}
              title={slide.title}
              label={slide.type}
              description={slide.description}
            />
            </ul>
        ))};
            {/*
            <ActusItem
              src={article1}
              title='Another rare spotless giraffe found—the first ever seen in the wild'
              label='Happy News'
              description='Just weeks after a giraffe at a U.S. zoo was born missing its characteristic spots, another spotless giraffe calf has now been seen and photographed in the wild for the first time.

              The unprecedented sighting occurred at Mount Etjo Safari Lodge, a private game reserve in central Namibia. Tour guide Eckart Demasius saw and photographed the solid-brown calf during a game drive on the roughly 90,000-acre reserve, according to the Giraffe Conservation Foundation. Demasius, who was not immediately available for comment, shared his photos with the giraffe nonprofit.
              
              Sara Ferguson, a wildlife veterinarian and conservation health coordinator at the foundation, says the two recent spotless sightings are pure coincidence and that there’s no data to suggest this coloring is occurring more frequently than it had in the past. 
              
              This finding is just another example of “the weird way the world works” she says, adding that she’s “so amazed and pleased there is so much more to learn and discover about giraffe.”'
            />
            <ActusItem
              src={article2}
              title='Extremely rare spotless giraffe born in U.S. zoo'
              label='Happy News'
              description='Just a few weeks old and still without a name, a newborn giraffe at a zoo in northeastern Tennessee could rightly be nicknamed “spotless.”

              The female giraffe born without its characteristic spots instead boasts a solid brown coat, a phenomenon that hasn’t been observed in any giraffe for more than 50 years. She was born last month at Brights Zoo, a family-owned facility in Limestone, Tennessee. A spotless giraffe was last reported at a Tokyo zoo in 1972.
              
              “The spotless giraffe calf is certainly an interesting case,” and that type of coloring has never been seen in the wild, says Sara Ferguson, a wildlife veterinarian and conservation health coordinator at the Giraffe Conservation Foundation.
              
              The animal’s rare coloring is likely due to some sort of mutation in one or more genes, she says. But there’s no indication of underlying medical issues or that the newborn reticulated giraffe—a subspecies native to eastern Africa—is at a genetic disadvantage.
              
              David Bright, zoo director at the Brights Zoo, says that the baby’s nine-year-old mother, Shenna, had previously birthed three other calves and the trio were all spotted. This latest addition to the zoo’s giraffe family was born at a weight of around 190 pounds, he says, and her veterinary care team concluded “she’s healthy and normal”—though her coloring was a surprise.'
            />
          </ul>
          <ul className='cards__items'>
            <ActusItem
              src={article3}
              title='a rarely seen sperm whale birth'
              label='Emotional News'
              description='During a routine observation off Dominica in July, researchers came upon a remarkable event: the birth of a sperm whale. Because the team happened to be equipped with advanced technology, their data will likely reveal more than we’ve ever known about the species.

              “I have been doing this for almost 20 years,” says Shane Gero, National Geographic Explorer and biology lead for Project CETI, an unprecedented initiative to understand what sperm whales are saying to one another. “Maybe if I do it for 20 more, there will be another day like this… it was pretty awe-inspiring.” He has followed the life of the mother, nicknamed Rounder, since she was nursing. She also has an older calf named Accra'
            />
            
        </ul>*/}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Actus;
