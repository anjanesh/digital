// npm i node-scp dotenv --save-dev
import * as dotenv from 'dotenv'
import { Client } from 'node-scp';
// var fs = require('fs');

dotenv.config();

var remote_server =
{
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    // forceIPv4: boolean,  //Connection allow only via resolved IPv4 address (true/false)
    // forceIPv6: boolean,  //Connection allow only via resolved IPv6 address (true/false)
    // privateKey: fs.readFileSync('./key.pem'),
    // passphrase: 'your key passphrase', 
}

const upload = async () =>
{
    try
    {
        const client = await Client(remote_server);
        console.log("Uploading .... ");
        await client.uploadDir(process.env.LOCAL_FOLDER, process.env.REMOTE_FOLDER);
        client.close();
        console.log("Upload Done");
    }
    catch (e)
    {
        console.log(e);
    }
  }
  
upload();