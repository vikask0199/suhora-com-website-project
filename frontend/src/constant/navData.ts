export interface SubLink {
    name: string;
    link: string;
}

export interface Link {
    name: string;
    subLinks: SubLink[];
}

export const links: Link[] = [
    {
        name: "Who we are",
        subLinks: [
            {
                name: "Our Principal",
                link: "/our-principles"
            },
            {
                name: "Our Team",
                link: "/our-teams"
            },
            {
                name: "Our Journey",
                link: "/our-journey"
            }
        ]
    },
    {
        name: "Products",
        subLinks: [
            {
                name: "SPADE",
                link: "/products/spade"
            },
            {
                name: "LANCE",
                link: "/products/lance"
            },
            {
                name: "SID",
                link: "/products/sid"
            }
        ]
    },
    {
        name: "Services",
        subLinks: [
            {
                name: "Hydrology",
                link: "/"
            },
            {
                name: "Terrain Mapping",
                link: "/"
            },
            {
                name: "Land Deformation Monitoring",
                link: "/"
            }
        ]
    },
    {
        name: "Resources",
        subLinks: [
            {
                name: "Blogs",
                link: "/"
            },
            {
                name: "Events & News",
                link: "/"
            },
            {
                name: "Careers",
                link: "/"
            }
        ]
    }
];
