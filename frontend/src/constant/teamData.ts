interface Employee {
    name: string;
    designation: string;
    img: string;
    links: {
        [key: string]: string;
    };
}


const employees: Employee[] = [
    {
        name: 'Rupesh Kumar',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/rupesh.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Ruby Yadav',
        designation: 'Sr. Accounts and HR executive ',
        img:"/src/assets/img/teams/IMG-20240207-WA0027 - Ruby Yadav.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Keerthana Govardhana',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/IMG_20231231_204339_Bokeh - Keerthana Govardhana.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Pratanu',
        designation: 'Geospatial Analyst',
        img:"/src/assets/img/teams/Pratanu_Photo - Pratanu Maity.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Surnisha R',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/IMG_20240207_203541492~2 - Sarunisha R.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Pratibha Mishra',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/WhatsApp Image 2024-02-07 at 7.14.50 PM - Pratibha Mishra.jpeg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Lokesh Kumar',
        designation: 'Sr. Data Scientist',
        img:"/src/assets/img/teams/IMG20220102181821 - Lokesh Kumar.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Sikander Yadav',
        designation: 'Business Development Executive',
        img:"/src/assets/img/teams/SIK_PASSPORT_WHITE_BG - Sikander Yadav.png",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    
    {
        name: 'Vishal Kumar',
        designation: 'Web Developer',
        img:"/src/assets/img/teams/vishal - Vishal Kumar.png",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Hamna Khan',
        designation: 'Software Developer',
        img:"/src/assets/img/teams/IMG_20240209_141446.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'John Doe',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/Pratanu_Photo - Pratanu Maity.jpg",
        links: {
            website: 'https://www.example.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    

   
    // Add more employees as needed
];


export const teamsData = {
    employees,
};