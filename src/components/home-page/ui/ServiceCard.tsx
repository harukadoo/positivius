import { ReactComponent as ArrowSvg } from '../../../img/arrow.svg';
import { IServiceCard } from '../../../types';

export const ServiceCard: React.FC<{ data: IServiceCard }> = ({ data: { title, link, img, backgroundColor } }) => {
     const invertColor = (hex: string) => {
        const normalizedHex = hex.toUpperCase(); 
        return normalizedHex === "#191A23" ? "#FFF" : normalizedHex === "#FFF" ? "#191A23" : hex;
    };

    const invertedTextColor = invertColor(link.textColor);
    return (
        <div className="services__content__card" style={{ backgroundColor }}>
            <div className="services__content__card__info">
                <div className="services__content__card__info__title">
                    {Object.values(title.text).map((line, index) => (
                        <h3 key={index} className="services__content__card__info__title__el" style={{ backgroundColor: title.backgroundColor }}>
                            {line}
                        </h3>
                    ))}
                </div>

                <a href={link.url} 
                className="services__content__card__info__link" 
                style={{ "--text-color": link.textColor,
                         "--bg-color": link.backgroundColor, 
                         "--text-hover-color": invertedTextColor } as React.CSSProperties}>

                    <ArrowSvg className="services__content__card__info__link__icon" style={{ stroke: link.arrowColor}}/>

                    <span className="services__content__card__info__link__text">Learn more</span>
                </a>
            </div>

            <img src={img} alt="img" className="services__content__card__img" />
         </div>
    )
};