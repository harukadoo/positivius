export const PartnersLogo = ({ url, img, alt }: { url: string; img: string; alt: string }) => {
    return (
        <a href={url}>
            <img src={img} alt={alt} className="partners__logo" />
        </a>
    )
}