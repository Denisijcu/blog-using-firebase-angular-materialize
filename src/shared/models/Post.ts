import { Comment } from './Comment';
export interface Post{
    id?: string;
    title: string;
    content: string;
    user: string;
    like: number;
    dislike: number;
    comments: number;
    posted: string;
    file?: string;
    progress?: number;
    url?: string;
    alias?:string;

}