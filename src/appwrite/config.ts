import { typeConfig } from "./typeConfig";
import { Client, Account, ID } from "appwrite";

type createUserAccount = {
  username: string;
  email: string;
  password: string;
};

type loginUserAccount = {
  username: string;
  password: string;
};

const client = new Client()
  .setEndpoint(typeConfig.appwriteURL)
  .setProject(typeConfig.appwriteProjectId);

export const account = new Account(client);

export class appwriteFunctions {
  // creating a user in appwrite
  async createUser({ username, email, password }: createUserAccount) {
    try {
      const user = await account.create(ID.unique(), username, email, password);
      if (user) {
        return this.loginUser({ username, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // log in a user
  async loginUser({ username, password }: loginUserAccount) {
    try {
      return await account.createSession(username, password);
    } catch (error) {
      console.log(error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      await this.currentUser();
    } catch (error) {
      throw error;
    }
    return false;
  }

  async currentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }
}

export const appwriteFunc = new appwriteFunctions();
