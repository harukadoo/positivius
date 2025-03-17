import { useState } from "react";
import plus from '../../../img/plus-icon.png';
import minus from '../../../img/minus-icon.png';
import { IWorkingProcess } from '../../../types';

export const WorkingProcessBlock: React.FC<{ 
    data: IWorkingProcess, 
    index: number,
    activeIndex: number | null,
    setActiveIndex: (index: number | null) => void,
}> = ({ data: { title, description }, index, activeIndex, setActiveIndex }) => {

    const isOpen = activeIndex === index;

    const toggleBlock = () => {
        setActiveIndex(isOpen ? null : index); 
    };

    return (
        <div className="working-process__content__block" style={{ backgroundColor: isOpen ? "#B9FF66" : "#F3F3F3" }}>
            <div className="working-process__content__block__head">
                <div className="working-process__content__block__head__content">
                    <span className="working-process__content__block__head__content__number">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="working-process__content__block__head__content__title">{title}</h3>
                </div>

                <button className="working-process__content__block__head__btn" onClick={toggleBlock}>
                    <img 
                        src={isOpen ? minus : plus} 
                        alt={isOpen ? "minus" : "plus"}  
                        className="working-process__content__block__head__btn__icon" 
                    />
                </button>
            </div>

            <div className="working-process__content__block__main" style={{ display: isOpen ? "block" : "none" }}>
                <span className="working-process__content__block__main__span"></span>

                <p className="working-process__content__block__main__description">{description}</p>
            </div>
        </div>
    )
}