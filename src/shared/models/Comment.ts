export interface Comment{
    user: string;
    comment: string;
    like: number;
    dislike: number;
    comment_at: string;
    id?: string;
    chat?: {
        user: string,
        text: string,
        avatar: string
    }
}