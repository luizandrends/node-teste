import { container } from 'tsyringe';

import './providers';
import '@modules/users/providers';

import UsersInterface from '@modules/users/interfaces/UsersInterface';
import UsersRepository from '@modules/users/infra/database/repositories/UsersRepository';

container.registerSingleton<UsersInterface>('UsersRepository', UsersRepository);
