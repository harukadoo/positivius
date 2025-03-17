import { IServiceCard } from '../types';
import services_card1 from '../img/services-card1.png';

const serviceCardData: IServiceCard[] = [
    {
        title: {
            text: {
                firstLine: 'Search engine',
                secondLine: 'optimization',
            },
            backgroundColor: '#B9FF66',
        },
        link: {
            url: '/',
            arrowColor: '#B9FF66',
            textColor: '#191A23',
            backgroundColor: '#191A23',
        },
        img: services_card1,
        backgroundColor: '#F3F3F3',
    },
    {
        title: {
            text: {
                firstLine: 'Pay-per-click',
                secondLine: 'advertising',
            },
            backgroundColor: '#fff',
        },
        link: {
            url: '/',
            arrowColor: '#B9FF66',
            textColor: '#191A23',
            backgroundColor: '#191A23',
        },
        img: services_card1,
        backgroundColor: '#B9FF66',
    },
    {
        title: {
            text: {
                firstLine: 'Social Media',
                secondLine: 'Marketing',
            },
            backgroundColor: '#fff',
        },
        link: {
            url: '/',
            arrowColor: '#191A23',
            textColor: '#fff',
            backgroundColor: '#fff',
        },
        img: services_card1,
        backgroundColor: '#191A23',
    },
    {
        title: {
            text: {
                firstLine: 'Email',
                secondLine: 'Marketing',
            },
            backgroundColor: '#B9FF66',
        },
        link: {
            url: '/',
            arrowColor: '#B9FF66',
            textColor: '#191A23',
            backgroundColor: '#191A23',
        },
        img: services_card1,
        backgroundColor: '#F3F3F3',
    },
    {
        title: {
            text: {
                firstLine: 'Content',
                secondLine: 'Creation',
            },
            backgroundColor: '#fff',
        },
        link: {
            url: '/',
            arrowColor: '#B9FF66',
            textColor: '#191A23',
            backgroundColor: '#191A23',
        },
        img: services_card1,
        backgroundColor: '#B9FF66',
    },
    {
        title: {
            text: {
                firstLine: 'Analytics and',
                secondLine: 'Tracking',
            },
            backgroundColor: '#B9FF66',
        },
        link: {
            url: '/',
            arrowColor: '#191A23',
            textColor: '#fff',
            backgroundColor: '#fff',
        },
        img: services_card1,
        backgroundColor: '#191A23',
    }
]

export {serviceCardData};
