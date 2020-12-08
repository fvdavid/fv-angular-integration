import { User } from './userlist.model';

export interface UserDetail {
    user: User;
    phone: string;
    location: Location;
    gender: string;
    registerDate: string;
    dateOfBirth: string;
}

export interface Location {
    state: string;
    street: string;
    city: string;
    timezone: string;
    country: string;
}
