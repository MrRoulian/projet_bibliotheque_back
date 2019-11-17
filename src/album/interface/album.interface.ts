import { Document } from 'mongoose';

export interface Album {
    id: string;
    photo: string;
    description: string;
    auteur?: string;
    photos: Photo[];
}

export interface Photo {
    id: string;
    path: string;
    description: string;
    auteur?: string;
}
