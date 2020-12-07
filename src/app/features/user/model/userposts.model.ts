import { User } from './userlist.model';

export interface UserPosts {
    data: UserPost[];
    total: number;
    page: number;
    limit: number;
    offset: number;
}

export interface UserPost {
    owner: User;
    id: string;
    image: string;
    publishDate: string;
    text: string;
    tags: Tag[];
    link: string;
    likes: number;
}

export interface Tag {

}
