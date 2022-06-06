import { Repository, getRepository, ObjectID } from 'typeorm';

import UsersInterface from '@modules/users/interfaces/UsersInterface';
import UserDTO from '@modules/users/dtos/UserDTO';
import User from '../schemas/User';

class UsersRepository implements UsersInterface {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: UserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    return user;
  }

  public async findById(userId: ObjectID): Promise<User | null> {
    const findUser = await this.ormRepository.findOne({
      where: { id: userId },
    });

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
