import { ObjectID } from 'typeorm';

import UserDTO from '@modules/users/dtos/UserDTO';
import User from '@modules/users/infra/database/schemas/User';

export default interface UsersInterface {
  create(userData: UserDTO): Promise<User>;
  findById(userId: ObjectID): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
