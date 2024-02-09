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
        name: 'John Doe',
        designation: 'Software Engineer',
        img:"/src/assets/img/teams/rupesh.jpg",
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