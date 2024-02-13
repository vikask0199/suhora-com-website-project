import krishanu from '../assets/img/teams/Krishanu.jpg'
import rupesh from '../assets/img/teams/rupesh.jpg'
import amit from '../assets/img/teams/Amit.jpg'
import ruby from '../assets/img/teams/Ruby.jpg'
// import lokesh from '../assets/img/teams/Lokesh.jpg'
import lokesh from '../assets/img/teams/lokesh_alt.jpg'
import keerthana from '../assets/img/teams/Keerthana.jpg'
import hamna from '../assets/img/teams/Hamna.jpg'
import pratanu from '../assets/img/teams/Pratanu.jpg'
import pratibha from '../assets/img/teams/Pratibha.jpg'
import sarunisha from '../assets/img/teams/Sarunisha.jpg'
import sikandar from '../assets/img/teams/Sikander.png'
import subhajit from '../assets/img/teams/Subhajit.jpeg'
import vinodbothale from '../assets/img/teams/Vinodbothale.jpg'
import vishal from '../assets/img/teams/Vishal.png'
import tanmoyadhikari from '../assets/img/teams/TanmoyAdhikari.jpg'
import vikas from '../assets/img/teams/Vikas.jpg'
import surojitbose from '../assets/img/teams/Surojit-Bose.jpg'
import navneetkaushik from '../assets/img/teams/NavneetKaushik.png'



export interface Employee {
    name: string;
    designation: string;
    img: string;
    links: {
        [key: string]: string;

    }
    
}


const employees: Employee[] = [
    {
        name: 'Krishanu Acharya',
        designation: 'CEO and Co-Founder',
        img: krishanu,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/krishanuacharya/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Rupesh Kumar',
        designation: 'CTO and Co-Founder',
        img: rupesh,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/rupeshgupte',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Amit Kumar',
        designation: 'COO and Co-Founder',
        img: amit,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/amitkumarsaini/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Tanmoy Adhikary',
        designation: 'Director - Strategy',
        img: tanmoyadhikari,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/tanmoy-adhikary-8132002/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Vinod Bothale',
        designation: 'Advisor',
        img: vinodbothale,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/vinod-bothale-7689407/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Surojit Bose',
        designation: 'Advisor',
        img: surojitbose,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/surojitbose/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Navneet Kaushik',
        designation: 'Advisor',
        img: navneetkaushik,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/cdr-navneet-kaushik-veteran-98964b82/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Ruby Yadav',
        designation: 'Sr. Accounts and HR executive ',
        img: ruby,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/ruby-yadav-97941b138',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Lokesh Kumar',
        designation: 'Sr. Data Scientist',
        img: lokesh,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/lokeshskshukla/',
            github: 'https://github.com/johndoe'
        }
    },
 
    {
        name: 'Pratanu',
        designation: 'Geospatial Analyst',
        img: pratanu,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/pratanu-maity-301548202',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Sarunisha R',
        designation: 'Geospatial Analyst',
        img: sarunisha,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/sarunisha-ramachandran-911884181',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Pratibha Mishra',
        designation: 'Geospatial Analyst',
        img: pratibha,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'http://www.linkedin.com/in/pratibha-m-6b615418a',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Subhajit Bera',
        designation: 'Geospatial Analyst',
        img: subhajit,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/subhajit-bera',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Sikander Yadav',
        designation: 'Business Development Executive',
        img: sikandar,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'http://linkedin.com/in/sikanderyadav',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Keerthana Govardhana',
        designation: 'Software Developer',
        img: keerthana,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/keerthana-govardhana-2249231a4/',
            github: 'https://github.com/johndoe'
        }
    },
   
    {
        name: 'Vishal Kumar',
        designation: 'Web Developer',
        img: vishal,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/vishal-kumar-2a3262251',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Hamna Khan',
        designation: 'Jr. Software Developer',
        img: hamna,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/hamna-khan-769535247/',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Vikas Kumar',
        designation: 'Jr. Software Engineer',
        img: vikas,
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/vikas-kumar-10b8822a9/',
            github: 'https://github.com/johndoe'
        }
    },
  
    
 

    

   
    // Add more employees as needed
];


export const teamsData = {
    employees,
};