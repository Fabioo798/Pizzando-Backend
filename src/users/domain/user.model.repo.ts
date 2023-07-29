import User from './user.model';

export default interface UserRepository {
  create: (user: User) => Promise<void>;
  update: (user: Partial<User>) => Promise<void>;
  find: (id: string) => Promise<User>;
  delete: (id: string) => Promise<void>;
}
