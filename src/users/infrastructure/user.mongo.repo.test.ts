import { mockUser } from '../../commons/mock.js';
import { UserModel } from '../../server/domain/user.schema';
import UserMongoRepo from './user.mongo.repo';

jest.mock('../../server/domain/user.schema');

const mockModel = {
  find: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
} as unknown as typeof UserModel;

describe('Given the UserMongoRepo class', () => {
  const repo = new UserMongoRepo(mockModel);

  describe('When it is called', () => {
    test('Then it should be instantiated', () => {
      expect(repo).toBeInstanceOf(UserMongoRepo);
    });
  });

  describe('When "create" method is called', () => {
    test('Then it should create an user', async () => {
      (mockModel.create as jest.Mock).mockResolvedValue(mockUser);

      await repo.create(mockUser);

      expect(mockModel.create).toHaveBeenCalled();
    });
  });

  describe('When "update" method is called', () => {
    test('Then it should update an user', async () => {
      (mockModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockUser);

      await repo.update(mockUser);

      expect(mockModel.findByIdAndUpdate).toHaveBeenCalled();
    });
  });

  describe('When "find" method is called', () => {
    test('Then it should find an user', async () => {
      (mockModel.findById as jest.Mock).mockResolvedValue(mockUser);

      await repo.find('2');

      expect(mockModel.findById).toHaveBeenCalled();
    });
  });

  describe('When "find" method is called', () => {
    test('Then it should find an user', async () => {
      (mockModel.findByIdAndDelete as jest.Mock).mockResolvedValue(mockUser);

      await repo.delete('2');

      expect(mockModel.findByIdAndDelete).toHaveBeenCalled();
    });
  });
});
