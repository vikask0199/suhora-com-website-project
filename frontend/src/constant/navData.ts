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
                name: "Our Principles",
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
                link: "/services/hydrology"
            },
            {
                name: "Terrain Mapping",
                link: "/services/terrain-mapping"
            },
            {
                name: "Land Deformation Monitoring",
                link: "/services/land-deformation-monitoring"
            }
        ]
    },
    {
        name: "Resources",
        subLinks: [
            {
                name: "Blogs",
                link: "/blogs"
            },
            {
                name: "Events & News",
                link: "/events-news"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Gallery",
                link: "/open-gallery"
            }
        ]
    }
];
