import team_member1 from '../../../img/john-smith.png';
import linkdein_logo from '../../../img/linkdein-logo.png';
import { ITeam } from '../../../types';

export const TeamCard: React.FC<{data: ITeam}> = ({ data: {name, job, description, linkdein, img} }) => {
    return (
        <div className="team__content__card">
            <div className="team__content__card__head">
                <img src={img} alt="John Smith" className="team__content__card__head__img" />

                <div className="team__content__card__head__info">
                    <h4 className="team__content__card__head__info__name">{name}</h4>
                    <p className="team__content__card__head__info__job">{job}</p>
                </div>

                <a href={linkdein} className="team__content__card__head__linkedin">
                    <img src={linkdein_logo} alt="linkdein logo" className="team__content__card__head__linkedin__icon" />
                </a>
            </div>

            <div className="team__content__card__main">
                <span className="team__content__card__main__span"></span>

                <p className="team__content__card__main__description">
                    {description}
                </p>
            </div>
        </div>
    )
}