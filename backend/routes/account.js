const router = require('express').Router();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const sdk = require('node-appwrite');
const client = new sdk.Client();
const databases = new sdk.Databases(client);
const storage = new sdk.Storage(client);
const users = new sdk.Users(client);
const Query = sdk.Query;
const ID = sdk.ID;
const InputFile = sdk.InputFile;

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY);

router.post('/api/get-user', async (req, res) => {
    try{
        const response = await databases.listDocuments(
            process.env.USER_DATABASE_ID,
            process.env.USERINFO_COLLECTION_ID,
            [Query.equal('userID', req.body.userID)]
        );

        res.send({
            status: 'success',
            body: response.documents[0]
        })
    }
    catch(error){
        res.send({
            status: 'failed',
            message: 'Something went wrong!'
        })
    }
})

router.post('/api/check-username', async (req, res) => {
    try {
        const response = await databases.listDocuments(
            process.env.USER_DATABASE_ID,
            process.env.USERINFO_COLLECTION_ID,
            [Query.equal('username', req.body.username)]
        );

        if (response.total == 0) {
            res.send({
                status: 'success',
                message: 'Username is available!',
            });
        } else {
            res.send({
                status: 'failed',
                message: 'Username already taken!',
            });
        }
    } catch (error) {
        res.send({
            status: 'failed',
            message: 'Something went wrong!',
        });
    }
});

router.post('/api/profile-setup', upload.single('avatar'), async (req, res) => {
    try {
        let storageResponse = null;

        if(req.file != undefined) {
            storageResponse = await storage.listFiles(
                process.env.USERAVATAR_BUCKET_ID,
                [Query.equal('name', req.body.userID + '-avatar')]
            );

            if(storageResponse.total > 0) {
                const id = storageResponse.files[0].$id;

                storageResponse = await storage.deleteFile(
                    process.env.USERAVATAR_BUCKET_ID,
                    id,
                    InputFile.fromBuffer(req.file.buffer, req.body.userID + '-avatar')
                )
            }

            storageResponse = await storage.createFile(
                process.env.USERAVATAR_BUCKET_ID,
                ID.unique(),
                InputFile.fromBuffer(req.file.buffer, req.body.userID + '-avatar')
            );
        }

        let databaseResponse = await databases.listDocuments(
            process.env.USER_DATABASE_ID,
            process.env.USERINFO_COLLECTION_ID,
            [Query.equal('userID', req.body.userID)]
        );
        
        if(databaseResponse.total > 0) {
            console.log(databaseResponse)
            await databases.updateDocument(
                process.env.USER_DATABASE_ID,
                process.env.USERINFO_COLLECTION_ID,
                databaseResponse.documents[0].$id,
                {
                    "name": req.body.name,
                    "userID": req.body.userID,
                    "username": req.body.username,
                    "avatarID": req.file == undefined ? '' : storageResponse.$id                    
                }
            )
        }
        else{
            await databases.createDocument(
                process.env.USER_DATABASE_ID,
                process.env.USERINFO_COLLECTION_ID,
                ID.unique(),
                {
                    "name": req.body.name,
                    "userID": req.body.userID,
                    "username": req.body.username,
                    "avatarID": req.file == undefined ? '' : storageResponse.$id
                }
            );
        }

        await users.updatePrefs(
            req.body.userID,
            {
                "setupDone": "true"
            }
        )

        res.send({ status: 'success' });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Something went wrong!',
        });
    }
});

module.exports = router;
