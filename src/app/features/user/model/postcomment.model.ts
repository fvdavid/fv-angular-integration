import { User } from './userlist.model';

export interface PostComment {
    comments: Comment[];
    total: number;
    page: number;
    limit: number;
    offset: number;
}

export interface Comment {
    owner: User;
    id: string;
    message: string;
    publishDate: string;
}
