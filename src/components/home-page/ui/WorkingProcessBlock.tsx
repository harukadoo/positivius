import plus from '../../../img/plus-icon.png';

export const WorkingProcessBlock = () => {
    return (
        <div className="working-process__content__block">
            <div className="working-process__content__block__head">
                <div className="working-process__content__block__head__content">
                    <span className="working-process__content__block__head__content__number">01</span>
                    <h3 className="working-process__content__block__head__content__title">Consultation</h3>
                </div>

                <button className="working-process__content__block__head__btn">
                    <img src={plus} alt="plus" className="working-process__content__block__head__btn__icon" />
                </button>
            </div>
        </div>
    )
}