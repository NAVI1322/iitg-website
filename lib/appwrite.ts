import { Client, Databases } from "appwrite";

export const appwrite = {
    DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
    USER_COLLECTION_ID: process.env.APPWRITE_USER_COLLECTION_ID
}


export const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.APPWRITE_PROJECT_ID || '')

export const databases = new Databases(client);
