import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

describe('ListProviders', () => {
  let fakeusersRepository: FakeUsersRepository;
  let listProviders: ListProvidersService;

  beforeEach(() => {
    fakeusersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeusersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeusersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeusersRepository.create({
      name: 'John Trê',
      email: 'johntre@example.com',
      password: '123456',
    });

    const loggedUser = await fakeusersRepository.create({
      name: 'John Qua',
      email: 'johnQua@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
