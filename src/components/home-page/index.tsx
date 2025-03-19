import {Header} from '../index';
import hero_img from '../../img/hero-img.png';
import cta_img from '../../img/cta-img.png';
import '../../styles/index.scss';
import { PartnersLogo } from './ui/PartnersLogo';
import { ReactComponent as ArrowSvg } from '../../img/arrow.svg';
import { ReactComponent as StarSvg } from '../../img/vector.svg';
import { ServiceCard } from './ui/ServiceCard';
import { WorkingProcessBlock } from './ui/WorkingProcessBlock';
import { TeamCard } from './ui/TeamCard';
import { serviceCardData } from '../../data/services';
import { workingProcessData } from '../../data/workingProcess';
import { useEffect, useState } from 'react';
import { teamData } from '../../data/team';
import { partners } from '../../data/partners';
import { testimonialsData } from '../../data/testimonials';
import { Testimonial } from './ui/Testimonial';

export const HomePage = () => {
    const [activeWorkingProcessIndex, setWorkingProcessIndex] = useState<number | null>(null);
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

    useEffect(() => {
        setActiveTestimonialIndex(2);
    }, []);

    const prevTestimonial = () => {
        setActiveTestimonialIndex((prev) =>
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const nextTestimonial = () => {
        setActiveTestimonialIndex((prev) =>
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };
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
                        {partners.map((item, index) => (
                            <PartnersLogo key={index} data={item} />
                        ))}
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
                            {serviceCardData.map((item, index) => (
                                <ServiceCard key={index} data={item} />
                            ))}
                        </div>
                    </section>

                    <section className="cta">
                        <div className="cta__block">
                            <div className="cta__block__content">
                                <h3 className="cta__block__content__title">Let’s make things happen</h3>
                                <p className="cta__block__content__text">
                                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                                </p>
                                <button className="cta__block__content__btn">Get your free proposal</button>
                            </div>

                            <img src={cta_img} alt="cta img" className="cta__block__img" />
                        </div>
                    </section>

                    <section className="case-studies">
                        <div className="case-studies__head">
                            <h2 className="case-studies__head__title">Case Studies</h2>
                            <p className="case-studies__head__description">
                                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                            </p>
                        </div>

                        <div className="case-studies__content">
                            <div className="case-studies__content__block">
                                <p className="case-studies__content__block__description">
                                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% 
                                    increase in website traffic and a 25% increase in sales.
                                </p>

                                <a href="/" className="case-studies__content__block__link">
                                    Learn more
                                    <ArrowSvg className="case-studies__content__block__link__icon" />
                                </a>
                            </div>

                            <span className="case-studies__content__span"></span>

                            <div className="case-studies__content__block">
                                <p className="case-studies__content__block__description">
                                    For a B2B software company, we developed an SEO strategy that resulted in a first page ranking 
                                    for key keywords and a 200% increase in organic traffic.
                                </p>

                                <a href="/" className="case-studies__content__block__link">
                                    Learn more
                                    <ArrowSvg className="case-studies__content__block__link__icon" />
                                </a>
                            </div>

                            <span className="case-studies__content__span"></span>

                            <div className="case-studies__content__block">
                                <p className="case-studies__content__block__description">
                                    For a national retail chain, we created a social media marketing campaign that increased followers
                                    by 25% and generated a 20% increase in online sales.
                                </p>

                                <a href="/" className="case-studies__content__block__link">
                                    Learn more
                                    <ArrowSvg className="case-studies__content__block__link__icon" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="working-process">
                        <div className="working-process__head">
                            <h2 className="working-process__head__title">Our Working Process</h2>
                            <p className="working-process__head__description">
                                Step-by-Step Guide to Achieving Your Business Goals
                            </p>
                        </div>

                        <div className="working-process__content">
                            {workingProcessData.map((item, index) => (
                                <WorkingProcessBlock 
                                    key={index} 
                                    data={item} 
                                    index={index}
                                    activeIndex={activeWorkingProcessIndex} 
                                    setActiveIndex={setWorkingProcessIndex} 
                                />
                            ))}
                        </div>
                    </section>

                    <section className="team">
                        <div className="team__head">
                            <h2 className="team__head__title">Team</h2>
                            <p className="team__head__description">
                                Meet the skilled and experienced team behind our successful digital marketing strategies
                            </p>
                        </div>

                        <div className="team__content">
                            {teamData.map((item, index) => (
                                <TeamCard key={index} data={item} />
                            ))}
                        </div>

                        <div className="team__footer">
                            <button className="team__footer__btn">See all team</button>
                        </div>
                    </section>

                    <section className="testimonials">
                        <div className="testimonials__head">
                            <h2 className="testimonials__head__title">Testimonials</h2>
                            <p className="testimonials__head__description">
                                Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                            </p>
                        </div>

                        <div className="testimonials__main">
                            <div className="testimonials__main__content" style={{
                                transform: `translateX(-${activeTestimonialIndex * 52}%)`,
                                transition: "transform 0.5s ease-in-out",
                            }}>
                                {testimonialsData.map((item, index) => (
                                    <Testimonial key={index} data={item} index={index} activeTestimonialIndex={activeTestimonialIndex}/>
                                ))}
                            </div>

                            <div className="testimonials__main__navigation">
                                <button className="testimonials__main__navigation__arrowleft" onClick={prevTestimonial}>
                                    <ArrowSvg className="testimonials__main__navigation__arrowleft__icon"/>
                                </button>

                                <div className="testimonials__main__navigation__stars">
                                    {testimonialsData.map((_, index) => (
                                        <StarSvg key={index} style={{ opacity: index === activeTestimonialIndex ? 1 : 0.3 }}/>
                                    ))}
                                </div>

                                <button className="testimonials__main__navigation__arrowright" onClick={nextTestimonial}>
                                    <ArrowSvg className="testimonials__main__navigation__arrowright__icon"/>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}