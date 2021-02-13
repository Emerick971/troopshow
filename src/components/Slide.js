import React, { Component } from 'react';
import Slider from 'react-slick';
import {Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/style.css';


const slides = [
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title1: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
        },

    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg',
        title1: 'Romeo et juliette',
        description: 'William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante.'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' ,
                    title1: 'Le livre de Dina',
                    description: 'Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/06e4d1f2-b18e-4047-95be-5a7d450aeb57/cover_picture_16_9.medium.B749BE96A1AAD3A4C8B302C610A7B97DB37888ADA722E4F354C943F429552BE2.jpeg' ,
        title1: 'Mass B - Fugue chorégraphique',
        description: 'Basée sur la marche, celle des populations fuyant leur pays avec l’espoir de se reconstruire dans un ailleurs, Béatrice Massin crée une fresque magnétique, empreinte d’humanité, sur l’air enchanteur de la Messe en si mineur de Bach. Un spectacle saisissant porté par dix jeunes interprètes !'
        },

    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg',
        title1: 'Romeo et juliette',
        description: 'William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante.'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/72c648cd-1758-4595-8f37-d67895000805/cover_picture_16_9.medium.4E6C96A84270966A0831C2CA640588650F4625AB497FB4966093EBD8F3E1C052.jpeg' ,
                    title1: 'Michka',
                    description: 'A l’approche de Noël, Michka, ours en peluche maltraité par sa jeune maîtresse, quitte la maison et part seul dans la neige. Après avoir découvert les joies mais aussi les difficultés de la liberté, il se met en quête d’une bonne action a faire. C’est alors qu’il rencontre le renne du père Noël, bien à la peine pour distribuer tous les cadeaux. Notre ami saura se rendre utile... mais à quel prix ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title1: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
        },

    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg',
        title1: 'Romeo et juliette',
        description: 'William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante.'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' ,
                    title1: 'Le livre de Dina',
                    description: 'Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title1: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
        },

    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg',
        title1: 'Romeo et juliette',
        description: 'William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante.'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' ,
                    title1: 'Le livre de Dina',
                    description: 'Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title1: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
        },

    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg',
        title1: 'Romeo et juliette',
        description: 'William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante.'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/86037afa-eea5-4c5e-87be-fa9ab90fb424/cover_picture_16_9.medium.343EA1C3378C15572F55EE3E6158B29B80ABAF29717C7A69A2785C60FC971FF4.png',
                    title1: 'Les douze travaux d\'Hercule',
                    description: "Il était une fois, en Grèce, au cours du VIe siècle av. J.-C., un héros, l'enfant d'un dieu et d'une mortelle, du nom d'Hercule. Il eut le malheur de faire une terrible bêtise. Pour être pardonné, les dieux lui ordonnèrent de réaliser une série de travaux tous plus difficiles les uns que les autres... Notre histoire commence alors qu'Hercule vient d'achever son troisième travail et retourne voir son commanditaire : Eurysthée, le Roi de l'Argolide, pour connaître la suite de sa tâche. Hercule va nous montrer comment regagner son honneur perdu et Thésée comment soulever un rocher pour devenir un grand roi."
    },

    ]



export default class SlideMovie extends Component {
    constructor(props){
        super(props);
    }
       //Function qui met à jour les states et ouvre la modal
   /* clickCard () {
        this.props.OnClickCard(slides[0]);
    };*/

    render() {

        //paramètres du slider
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialise: 0,           
            cssEase: 'ease-in-out',
            centerPadding: '5px',
            draggable: false,
            classNames: 'carouselSlider',
        };


 


        //Sur click de la vignette on initialise la function clickCard avec des paramètres

        return (
            <Container className='divContainer'>
                <Row>
                    <div className='divSlide'>
                        <h3 className='titleSlider'>{this.props.title}</h3>

                        <Slider {...settings}>
                        
                {
                    slides.map(slide => (
                        <div className='effect'>
                            <Link to={'/video'}>
                                <div className='transition' onClick={() => this.props.onClickCard(slide.title1)}>
                                    <img src={slide.image} alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>{slide.title1}</h4>{slide.description}</p>
                                    </div>
                                </div>
                             </Link>
                        </div>
                            
                    ))}
                        </Slider>
                    </div>
                </Row>
            </Container>
        );
    }
}