import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/database/schemas/User';
import UserDTO from '../dtos/UserDTO';
import UsersInterface from '../interfaces/UsersInterface';
import HashProvider from '../providers/HashProvider/interfaces/HashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersInterface,

    @inject('HashProvider')
    private hashProvider: HashProvider
  ) {}

  public async execute(userData: UserDTO): Promise<User> {
    const { name, email, password } = userData;

    const findUserByEmail = await this.usersRepository.findByEmail(email);

    if (findUserByEmail) {
      throw new AppError('Email already in database', 400);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const createUserData = {
      name,
      email,
      password: hashedPassword,
    };

    const user = await this.usersRepository.create(createUserData);

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
