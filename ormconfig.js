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
    url: 'mongodb+srv://admin:admin123@cluster0.atsla.mongodb.net/?retryWrites=true&w=majority',
    entities: [
      process.env.NODE_ENV === 'development'
        ? env.developmentPath
        : env.productionPath,
    ],
    database: 'signup-database',
  },
];

module.exports = connection;
