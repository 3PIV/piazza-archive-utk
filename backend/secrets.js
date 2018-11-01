// secrets.js

const secrets = {
    //dbUri: "mongodb://360ta:batterystapler1@ds143932.mlab.com:43932/piazza-archive"
    dbUri: process.env.DB_URI
};
  
export const getSecret = key => secrets[key];
