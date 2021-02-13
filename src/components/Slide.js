import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container, Row } from 'react-bootstrap';

// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/style.css';


const slides = [
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
        },
        {
            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
            title: 'Beethoven',
            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                },
                {
                    image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                    title: 'Beethoven',
                    description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },
    {
        image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
        title: 'Beethoven',
        description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
                        },
                        {
                            image: 'https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' ,
                            title: 'Beethoven',
                            description: 'le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?'
    },

    ]



export default class SlideMovie extends Component {

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
                        <div className='transition'>
                                    <img src={slide.image} alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>{slide.title}</h4>{slide.description}</p>
                                    </div>
                                </div>
                                </div>
                    ))}
            


                        </Slider>
                    </div >
                </Row>
            </Container>


        );
    }
}