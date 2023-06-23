import https from 'https';
import fs from 'fs';
import * as dotenv from 'dotenv';
import gracefulShutdown from 'http-graceful-shutdown';
import * as server from './utils/server.js';

dotenv.config();
const { PORT } = process.env;

const privateKey = fs.readFileSync('./crypto/ssl.key');
const certificate = fs.readFileSync('./crypto/ssl.crt');

const options = { key: privateKey, cert: certificate };

const app = https.createServer(options, server);

const srv = app.listen(PORT, () => {
    console.log(`Process id: ${process.pid}`);
    console.info(`Listening on https://localhost:${PORT}`);
    console.info(`Open https://localhost:${PORT}/api-docs for documentation`);
});

gracefulShutdown(srv);
