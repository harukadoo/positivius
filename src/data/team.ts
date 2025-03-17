import john_smith from '../img/john-smith.png';
import jane_doe from '../img/jane-doe.png';
import michael_brown from '../img/michael-brown.png';
import emily_johnson from '../img/emily-johnson.png';
import brian_williams from '../img/brian-williams.png';
import sarah_kim from '../img/sarah-kim.png';
import { ITeam } from '../types';

const teamData: ITeam[] = [
    {
        name: 'John Smith',
        job: 'CEO and Founder',
        description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        linkdein: 'https://linkedin.com/',
        img: john_smith
    },
    {
        name: 'Jane Doe',
        job: 'Director of Operations',
        description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        linkdein: 'https://linkedin.com/',
        img: jane_doe
    },
    {
        name: 'Michael Brown',
        job: 'Senior SEO Specialist',
        description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        linkdein: 'https://linkedin.com/',
        img: michael_brown
    },
    {
        name: 'Emily Johnson',
        job: 'PPC Manager',
        description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        linkdein: 'https://linkedin.com/',
        img: emily_johnson
    },
    {
        name: 'Brian Williams',
        job: 'Social Media Specialist',
        description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        linkdein: 'https://linkedin.com/',
        img: brian_williams
    },
    {
        name: 'Sarah Kim',
        job: 'Content Creator',
        description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
        linkdein: 'https://linkedin.com/',
        img: sarah_kim
    },
]

export {teamData}