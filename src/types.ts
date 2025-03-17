export interface IPartners {
    url: string;
    img: string;
    alt: string;
}

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

export interface IWorkingProcess {
    title: string;
    description: string;
}

export interface ITeam {
    name: string;
    job: string;
    description: string;
    linkdein: string;
    img: string;
}