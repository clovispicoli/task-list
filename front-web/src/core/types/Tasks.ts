export type HomeResponse = {
    content: Home[];
    totalPages: number;
}

export type Home = {
    id: number;
    name: string;
    description: string;
    date: number;
    categories: Category[];
}

export type WorkResponse = {
    content: Work[];
    totalPages: number;
}

export type Work = {
    id: number;
    name: string;
    description: string;
    date: number;
    categories: Category[];
}

export type PersonalResponse = {
    content: Personal[];
    totalPages: number;
}

export type Personal = {
    id: number;
    name: string;
    description: string;
    date: number;
    categories: Category[];
}

export type Category = {
    id: number;
    name: string;
} 
