import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/database/schemas/User';
import UserDTO from '../dtos/UserDTO';
import UsersInterface from '../interfaces/UsersInterface';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersInterface
  ) {}

  public async execute(userData: UserDTO): Promise<User> {
    const { name, email, password } = userData;

    const findUserByEmail = await this.usersRepository.findByEmail(email);

    if (findUserByEmail) {
      throw new AppError('Email already in database', 400);
    }

    const createUserData = {
      name,
      email,
      password,
    };

    const user = await this.usersRepository.create(createUserData);

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
