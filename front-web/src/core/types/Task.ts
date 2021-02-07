export type HomesResponse = {
    content: Homes[];
    totalPages: number;
}

export type Homes = {
    id: number;
    name: string;
    description: string;
    date: string;
    categories: Category[];
}

export type PersonalsResponse = {
    content: Homes[];
    totalPages: number;
}

export type Personals = {
    id: number;
    name: string;
    description: string;
    date: string;
    categories: Category[];
}

export type WorksResponse = {
    content: Works[];
    totalPages: number;
}

export type Works = {
    id: number;
    name: string;
    description: string;
    date: string;
    categories: Category[];
}

export type Category = {
    id: number;
    name: string;
} 
