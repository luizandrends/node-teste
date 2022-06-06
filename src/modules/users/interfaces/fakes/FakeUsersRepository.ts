import mongoose from 'mongoose';
import { ObjectID } from 'typeorm';

import User from '@modules/users/infra/database/schemas/User';
import UserDTO from '@modules/users/dtos/UserDTO';
import UsersInterface from '../UsersInterface';

class FakeUsersRepository implements UsersInterface {
  private users: User[] = [];

  public async create(userData: UserDTO): Promise<User> {
    const user = new User();

    const userId = new mongoose.Types.ObjectId();

    Object.assign(user, { id: userId }, userData);

    this.users.push(user);

    return user;
  }

  public async findById(userId: ObjectID): Promise<User | null | undefined> {
    const findUser = this.users.find(user => user.id === userId);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | null | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async save(user: User): Promise<User> {
    return user;
  }
}

export default FakeUsersRepository;
