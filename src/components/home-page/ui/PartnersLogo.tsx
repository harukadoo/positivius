import { IPartners } from "../../../types"

export const PartnersLogo: React.FC<{data: IPartners}> = ({ data: {url, alt, img} }) => {
    return (
        <a href={url}>
            <img src={img} alt={alt} className="partners__logo" />
        </a>
    )
}