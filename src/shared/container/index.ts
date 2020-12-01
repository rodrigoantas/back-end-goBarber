import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// register cria um repositorio novo toda vez, o registersingleton ele instancia essa classe apenas uma vez durante todo o ciclo de vida da aplicação, ou seja os proximos services que precisarem de appointmentsrepository, vai usar o mesmo.

container.registerSingleton<IAppointmentsRepository>(
  'AppoitmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
