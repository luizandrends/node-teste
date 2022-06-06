const connection = [
  {
    name: 'default',
    type: 'mongodb',
    url: 'mongodb://admin:admin123@mongodb:27017/auth-signup',
    entities: ['./src/modules/**/infra/database/schemas/*.ts'],
  },
];

export default connection;
