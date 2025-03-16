import team_member1 from '../../../img/team-member1.png';
import linkdein_logo from '../../../img/linkdein-logo.png';

export const TeamCard = () => {
    return (
        <div className="team__content__card">
            <div className="team__content__card__head">
                <img src={team_member1} alt="John Smith" className="team__content__card__head__img" />

                <div className="team__content__card__head__info">
                    <h4 className="team__content__card__head__info__name">John Smith</h4>
                    <p className="team__content__card__head__info__job">CEO and Founder</p>
                </div>

                <a href="/" className="team__content__card__head__linkedin">
                    <img src={linkdein_logo} alt="linkdein logo" className="team__content__card__head__linkedin__icon" />
                </a>
            </div>

            <div className="team__content__card__main">
                <span className="team__content__card__main__span"></span>

                <p className="team__content__card__main__description">
                    10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                </p>
            </div>
        </div>
    )
}