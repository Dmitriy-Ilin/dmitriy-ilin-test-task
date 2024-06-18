export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface IAlbum {
  albumId: string;
  id: string;
  title: string;
}

export interface IPhoto {
  albumId: number;
  id: string;
  title: string;
  url: string;
}
