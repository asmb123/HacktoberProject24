import { Client, Messaging } from "node-appwrite";
import { typeConfig } from "./typeConfig";

export const client = new Client()
  .setEndpoint(typeConfig.appwriteURL)
  .setProject(typeConfig.appwriteProjectId)
  .setKey(typeConfig.appwriteAPIKey);

export const messaging = new Messaging(client);

export const messageId = "671f8551003938425531";
