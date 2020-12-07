export interface UserList {
    data: User[];
    total: string;
    page: string;
    limit: string;
    offset: string;
}

export interface User {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    title: string;
    picture: string;
}

export interface DialogDataUser {
    userId: string;
}
