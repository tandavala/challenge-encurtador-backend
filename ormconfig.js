require('dotenv/config');
const isProd = process.env.NODE_ENV === 'production';
const entitiesExtension = isProd ? 'js' : 'ts';
const entitiesDir = isProd ? 'dist' : 'src';
const migrationsDir = isProd ? 'dist/migration/*.js' : 'src/migration/*.ts';

module.exports = {
  type: 'postgres',
  entities: [`${__dirname}'/../**/*.entity.js'`],
  url: process.env.DATABASE_URL,
};
