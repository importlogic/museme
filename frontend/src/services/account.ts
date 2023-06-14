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
    let response = await account.get();

    if(response.prefs.setupDone === undefined) {
        await account.updatePrefs({
            setupDone: 'false'
        });

        response.prefs.setupDone = 'false';
    }

    return response;
};
