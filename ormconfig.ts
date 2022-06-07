const connection = [
  {
    name: 'default',
    type: 'mongodb',
    url: 'mongodb://localhost:27017/auth-signup',
    entities: ['./src/modules/**/infra/database/schemas/*.ts'],
  },
];

export default connection;
