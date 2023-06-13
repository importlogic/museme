//@ts-ignore
import { Account, ID } from 'appwrite';

import client from './appwriteConfig.js';

const account = new Account(client);

export const createAccount = async (email: string, password: string) => {
    await account.create(ID.unique(), email, password);
};

export const loginAccount = async (email: string, password: string) => {
    await account.createEmailSession(email, password);
};

export const getUser = async () => {
    const response = await account.get();

    return response;
};
