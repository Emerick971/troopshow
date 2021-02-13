import React from 'react';
import ComingShows from './ComingShows';
import image from '../images/telechargement.jpeg';


const coming = [
    {
        image: `${image}`,
        date: "16.02.2021",
        artiste: "Next artist",
        type1: "DANCE",
        type2: "KIDS"
    },
    {
        image: `${image}`,
        date: "16.02.2021",
        artiste: "Next artist",
        type1: "DANCE",
        type2: "KIDS"
    },
    {
        image: `${image}`,
        date: "16.02.2021",
        artiste: "Next artist",
        type1: "DANCE",
        type2: "KIDS"
    },
    {
        image: `${image}`,
        date: "16.02.2021",
        artiste: "Next artist",
        type1: "DANCE",
        type2: "KIDS"
    }
]

const ListComingShows = () => (
    <div className="containerDateShow">
        {
            coming.map(item => (
                <ComingShows image={item.image} date={item.date} artiste={item.artiste} type1={item.type1} type2={item.type2} />
            ))}
    </div>
    
);

export default ListComingShows;