import { typeConfig } from "./typeConfig";
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(typeConfig.appwriteURL)
  .setProject(typeConfig.appwriteProjectId);
  

export const account = new Account(client);