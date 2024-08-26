export type RandomItem = {
    title: string;
    imageSource: string;
    description: string;
    location: string;
    price:string;
};

export const  RandomItems = [
    {
        title: 'Introduction to Calculus',
        imageSource: require('../utils/images/img23.png'), 
        description: 'Learn the fundamentals of calculus including limits, derivatives, and integrals.',
        location: 'Lavinia Ionel',
        price: '150$',
        
    },
    {
        title: 'Algorithms and Data Structures',
        imageSource: require('../utils/images/f4.png'), 
        description: 'Understand key algorithms and data structures used in computer science.',
        location: 'Miron Laura',
        price: '200$'
    },
    {
        title: 'Discrete Mathematics',
        imageSource: require('../utils/images/i1.png'), 
        description: 'Explore topics in discrete mathematics, including logic and set theory.',
        location: 'Mihaela Miron',
        price: '175$'
    },
    {
        title: 'Linear Algebra',
        imageSource: require('../utils/images/img9.png'), 
        description: 'Study vectors, matrices, and linear transformations.',
        location: 'Camelia Ionel',
        price: '160$'
    },
    {
        title: 'Operating Systems',
        imageSource: require('../utils/images/img22.png'), 
        description: 'Learn about the design and implementation of operating systems.',
        location: 'Ana Muresan',
        price: '180$'
    },
    {
        title: 'Computer Networks',
        imageSource: require('../utils/images/img23.png'), 
        description: 'Understand the principles of computer networks, including protocols.',
        location: 'Vlad Stan',
        price: '190$'
    },
    {
        title: 'Database Systems',
        imageSource: require('../utils/images/i1.png'), 
        description: 'Explore database design, SQL, and data management.',
        location: 'Paul Somesan',
        price: '170$'
    },
    {
        title: 'Artificial Intelligence',
        imageSource: require('../utils/images/f4.png'), 
        description: 'Study the concepts and techniques used in artificial intelligence .',
        location: 'Miron Laura',
        price: '210$'
    },
    {
        title: 'Software Engineering',
        imageSource: require('../utils/images/img9.png'), 
        description: 'Learn about the software development lifecycle and best practices.',
        location: 'Lavinia Ionel',
        price: '220$'
    },
    {
        title: 'Computer Graphics',
        imageSource: require('../utils/images/img23.png'), 
        description: 'Explore the principles of computer graphics like rendering and animation.',
        location: 'Lavinia Miron',
        price: '200$'
    }
];

