export type TaskResponse = {
    content: Task[];
    totalPages: number;
}

export type Task = {
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
