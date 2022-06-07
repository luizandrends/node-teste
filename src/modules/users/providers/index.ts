import { container } from 'tsyringe';

import HashProvider from './HashProvider/interfaces/HashProvider';

import BCryptHashProvider from './HashProvider/implementations/BcryptHashProvider';

container.registerSingleton<HashProvider>('HashProvider', BCryptHashProvider);
