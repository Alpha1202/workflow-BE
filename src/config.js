const dotenv = require('dotenv');

dotenv.config();

export const config = {
    uri: process.env.DEV_DATABASE_URI
}