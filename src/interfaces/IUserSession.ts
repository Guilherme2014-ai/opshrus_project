import IProject from "./IProject";

export default interface IUserSession {
  id: string;
  name: string;
  age: number;
  profile_picture: string;
  projects: IProject[];
}
