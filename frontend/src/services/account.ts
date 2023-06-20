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

    const userDetails = await fetch(import.meta.env.VITE_BACKEND_SERVER_URL + '/api/get-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userID: response.$id
        })
    })

    const userDetailsJSON = await userDetails.json();

    response.name = userDetailsJSON.body.name;
    response.username = userDetailsJSON.body.username;

    return response;
};
