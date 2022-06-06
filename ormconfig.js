require('dotenv/config');

const env = {
  developmentPath: './src/app/schemas/*.ts',
  productionPath: './dist/app/schemas/*.js',
  developmentDatabaseName: 'auth-register',
  productionDatabaseName: 'auth-register-prod',
};

const connection = [
  {
    name: 'default',
    type: 'mongodb',
    url: `mongodb+srv://admin:admin@auth-database.tg6h7.mongodb.net/${
      process.env.NODE_ENV === 'development'
        ? env.developmentDatabaseName
        : env.productionDatabaseName
    }?retryWrites=true&w=majority`,
    entities: [
      process.env.NODE_ENV === 'development'
        ? env.developmentPath
        : env.productionPath,
    ],
  },
];

module.exports = connection;
