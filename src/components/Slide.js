import React, { Component } from 'react';
import Slider from 'react-slick';
import { Row } from 'react-bootstrap';

// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/style.css';




export default class SlideMovie extends Component {

    render() {

        //paramètres du slider
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialise: 0,
            cssEase: 'ease-in-out',
            centerPadding: '5px',
            draggable: false,
            classNames: 'carouselSlider',


        };


        //Sur click de la vignette on initialise la function clickCard avec des paramètres

        return (

            <div className='background container'>
                <Row>
                    <h3 className='titleSlider'>{this.props.title}</h3>

                    <Slider {...settings}>


                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Beethoven</h4>Beethoven, le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg' alt='Romeo et juliette' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                            <h4 className='titleImage'>Romeo et Juliette</h4>
                                            William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante et animale de l'un des plus grands classiques de Shakespeare. Roméo et Juliet vont lutter pour avoir le droit de s'aimer au-delà des sexes, des conventions sociales, des âges, avant d'être finalement mis à mort...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' alt='Le livre de Dina' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Le livre de Dina</h4>Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Beethoven</h4>Beethoven, le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg' alt='Romeo et juliette' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                            <h4 className='titleImage'>Romeo et Juliette</h4>
                                            William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante et animale de l'un des plus grands classiques de Shakespeare. Roméo et Juliet vont lutter pour avoir le droit de s'aimer au-delà des sexes, des conventions sociales, des âges, avant d'être finalement mis à mort...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' alt='Le livre de Dina' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Le livre de Dina</h4>Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Beethoven</h4>Beethoven, le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg' alt='Romeo et juliette' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                            <h4 className='titleImage'>Romeo et Juliette</h4>
                                            William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante et animale de l'un des plus grands classiques de Shakespeare. Roméo et Juliet vont lutter pour avoir le droit de s'aimer au-delà des sexes, des conventions sociales, des âges, avant d'être finalement mis à mort...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' alt='Le livre de Dina' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Le livre de Dina</h4>Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Beethoven</h4>Beethoven, le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg' alt='Romeo et juliette' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                            <h4 className='titleImage'>Romeo et Juliette</h4>
                                            William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante et animale de l'un des plus grands classiques de Shakespeare. Roméo et Juliet vont lutter pour avoir le droit de s'aimer au-delà des sexes, des conventions sociales, des âges, avant d'être finalement mis à mort...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' alt='Le livre de Dina' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Le livre de Dina</h4>Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/b16932f4-e4dd-4107-a0b6-a002b9a85592/cover_picture_16_9.medium.A710E790A45F7B10475060D8FA0F30926F75727EE5EF46473F9902CAAED2B33A.jpeg' alt='Beethoven' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Beethoven</h4>Beethoven, le compositeur le plus joué et pourtant l’homme le plus mal aimé de son temps. Découvrez le visage secret du monstre sacré de la musique à travers ce récital de haute volée doublé d’un seul en scène palpitant. Amoyel nous en dévoile le visage secret à travers une enquête fascinante sur le chef-d’œuvre absolu du piano, les 32 Sonates. Entendrez-vous Beethoven de la même manière ?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/4d0fe559-f97c-4f95-9407-0741de7ffb9b/cover_picture_16_9.medium.8C97FA606440F220C678E2BE0769F8DD80F1F79C5BEBE3DB259B2D6D276BBBAC.jpeg' alt='Romeo et juliette' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                            <h4 className='titleImage'>Romeo et Juliette</h4>
                                            William Shakespeare, génie éternel, iconoclaste, jette sans cesse des ponts entre notre monde moderne et le sien. Ses pièces, représentées dans toutes les langues, embrassent toutes les formes de spectacle et unissent le verbe à la musique, le chant à la danse. Tout en respectant le théâtre élisabhétain, où tous les rôles étaient joués par des hommes, Magnus Casalibus propose une version actuelle sanglante et animale de l'un des plus grands classiques de Shakespeare. Roméo et Juliet vont lutter pour avoir le droit de s'aimer au-delà des sexes, des conventions sociales, des âges, avant d'être finalement mis à mort...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='effect'>
                                <div className='transition'>
                                    <img src='https://production.content.okast.tv/64d44338-bd3b-4f08-a3cb-6121d6ea4b7f/medias/cbb06563-07a8-4c96-99bb-ee4531ab4311/cover_picture_16_9.medium.84E05BEE835693D5127B455A76F04A4988A555F374459A1E04605BF560FF9A6D.jpeg' alt='Le livre de Dina' className='imageSlide' />
                                    <div className='overlay'>
                                        <p className='text'>
                                        <h4 className='titleImage'>Le livre de Dina</h4>Le livre commence en haut d’un abîme. Une femme, debout dans la neige, regarde un précipice. Blessée ou meurtrière, elle s’éloigne de ce lieu de mort. Son histoire, peu à peu, nous est contée, comme un poème épique, au rythme des saisons, des rites, dans un village aux confins du monde, à l’extrême nord de la Norvège. A travers le cheminement de Dina on découvre une société norvégienne, un microcosme, avec ses règles, ses habitudes, ses conventions, ses fantômes. Monde de glace et de vent, entre mer et montagne.</p>
                                    </div>
                                </div>
                            </div>

                    </Slider>

                </Row>
            </div >
        );
    }
}