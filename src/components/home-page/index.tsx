import {Header} from '../index';
import hero_img from '../../img/hero-img.png';
import amazon_img from '../../img/amazon-logo.png';
import dribbble_img from '../../img/dribbble-logo.png';
import hubspot_img from '../../img/hubspot-logo.png';
import notion_img from '../../img/notion-logo.png';
import netflix_img from '../../img/netflix-logo.png';
import zoom_img from '../../img/zoom-logo.png';
import services_card1 from '../../img/services-card1.png';
import '../../styles/index.scss';
import { PartnersLogo } from './ui/PartnersLogo';
import { ReactComponent as ArrowSvg } from '../../img/arrow.svg';

export const HomePage = () => {
    return (
        <>
            <Header />

            <div className="homepage">
                <div className="homepage__container">
                    <section className="hero">
                        <img src={hero_img} alt="hero-img" className="hero__img" />

                        <div className="hero__content">
                            <h1 className="hero__content__title">Navigating the digital landscape for success</h1>
                            <p className="hero__content__description">
                                Our digital marketing agency helps businesses grow and succeed online through a range of services 
                                including SEO, PPC, social media marketing, and content creation.
                            </p>

                            <button className="hero__content__btn">Book a consultation</button>
                        </div>
                    </section>

                    <section className="partners">
                        <PartnersLogo url={"https://www.amazon.com/"} img={amazon_img} alt={"amazon"} />

                        <PartnersLogo url={"https://dribbble.com/"} img={dribbble_img} alt={"dribbble"} />

                        <PartnersLogo url={"https://www.hubspot.com/"} img={hubspot_img} alt={"hubspot"} />

                        <PartnersLogo url={"https://www.notion.com/"} img={notion_img} alt={"notion"} />

                        <PartnersLogo url={"https://www.netflix.com/"} img={netflix_img} alt={"netflix"} />

                        <PartnersLogo url={"https://www.zoom.com/"} img={zoom_img} alt={"zoom"} />
                    </section>

                    <section className="services">
                        <div className="services__head">
                            <h2 className="services__head__title">Services</h2>
                            <p className="services__head__description">
                                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. 
                                These services include:
                            </p>
                        </div>

                        <div className="services__content">
                            <div className="services__content__card">
                                <div className="services__content__card__info">
                                    <div className="services__content__card__info__title">
                                        <h3 className="services__content__card__info__title__el">Search engine</h3>
                                        <h3 className="services__content__card__info__title__el">optimization</h3>
                                    </div>

                                    <a href="#" className="services__content__card__info__link">
                                        <ArrowSvg className="services__content__card__info__link__icon" />

                                        <span className="services__content__card__info__link__text">Learn more</span>
                                    </a>
                                </div>

                                <img src={services_card1} alt="img" className="services__content__card__img" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}