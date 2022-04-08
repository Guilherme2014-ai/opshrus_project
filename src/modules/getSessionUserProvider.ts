import IUserSession from "../interfaces/IUserSession";

export default (userSessionStringfied: string) => {
  const userSession: IUserSession = JSON.parse(userSessionStringfied);
  return userSession;
};
