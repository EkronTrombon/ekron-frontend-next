import { ObjectId } from 'mongodb';

export interface Project {
  _id?: ObjectId;
  id: string;
  name: string;
  excerpt: string;
  description: string;
  thumbnail: string;
  hero: string;
  images: string[];
}