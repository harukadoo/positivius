export interface IServiceCard {
    title: {
        text: {
            firstLine: string;
            secondLine: string;
        };
        backgroundColor: string;
    };
    link: {
        url: string;
        arrowColor: string;
        textColor: string;
        backgroundColor: string;
    };
    img: string;
    backgroundColor: string;
}
