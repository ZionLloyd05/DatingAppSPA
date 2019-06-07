import { Photo } from "./photo";
export interface User {
  id: number;
  username: string;
  age: number;
  gender: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  lookingFor: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  photos?: Photo[];
}
