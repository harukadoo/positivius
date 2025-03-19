import { ITestimonials } from "../../../types"

export const Testimonial: React.FC<{data: ITestimonials, index: number, activeTestimonialIndex: number}> = ({ data: {text, author}, index, activeTestimonialIndex}) => {
    return (
        <div 
            className="testimonials__main__content__block"  
            style={{ opacity: index === activeTestimonialIndex ? 1 : 0.4, transition: "opacity 0.5s ease-in-out" }}
        >
            <div className="testimonials__main__content__block__comment">
                <p className="testimonials__main__content__block__comment__text">
                    {text}
                </p>
            </div>

            <div className="testimonials__main__content__block__author">
                <h4 className="testimonials__main__content__block__author__name">{author.name}</h4>
                <p className="testimonials__main__content__block__author__job">{author.job}</p>
            </div>
        </div>
    )
}