import { IPartners } from "../types";
import amazon_img from '../img/amazon-logo.png';
import dribbble_img from '../img/dribbble-logo.png';
import hubspot_img from '../img/hubspot-logo.png';
import notion_img from '../img/notion-logo.png';
import netflix_img from '../img/netflix-logo.png';
import zoom_img from '../img/zoom-logo.png';

const partners: IPartners[] = [
    {
        url: 'https://www.amazon.com/',
        img: amazon_img,
        alt: 'amazon',
    },
    {
        url: 'https://dribbble.com/',
        img: dribbble_img,
        alt: 'dribbble',
    },
    {
        url: 'https://www.hubspot.com/',
        img: hubspot_img,
        alt: 'hubspot',
    },
    {
        url: 'https://www.notion.com/',
        img: notion_img,
        alt: 'notion',
    },
    {
        url: 'https://www.netflix.com/',
        img: netflix_img,
        alt: 'netflix',
    },
    {
        url: 'https://www.zoom.com/',
        img: zoom_img,
        alt: 'zoom',
    },
]

export {partners};