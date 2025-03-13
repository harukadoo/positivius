import { ReactComponent as ArrowSvg } from '../../../img/arrow.svg';
import services_card1 from '../../../img/services-card1.png';

export const ServiceCard = () => {
    return (
        // <div className="services__content">
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
        // </div>
    )
}