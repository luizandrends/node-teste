import { container } from 'tsyringe';

import UsersInterface from '@modules/users/interfaces/UsersInterface';
import UsersRepository from '@modules/users/infra/database/repositories/UsersRepository';

container.registerSingleton<UsersInterface>('UsersRepository', UsersRepository);
