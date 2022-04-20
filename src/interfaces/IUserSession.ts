import IProject from "./IProject";

export default interface IUserSession {
  id: string;
  name: string;
  age: number;
  email: string;
  profile_picture: string;
  projects: IProject[];
}
