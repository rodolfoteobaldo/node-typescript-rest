import User from '../models/User';

class UserRepository {
  async getByUsername(username: string): Promise<User | undefined> {
    return await User.findOne({ where: { username } });
  }
}

export default new UserRepository();
