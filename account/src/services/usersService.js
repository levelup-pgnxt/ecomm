import users from '../models/User.js';

class UserService {

    static getAllUsers = async () => {
        return await users.find();
    };

    static getUserById = async (id) => {
        const user = await users.findById(id);
        return user;
    };

    static getUserByName = async (name) => {
        const user = await users.find({ nome: { $regex: name }});
        return user;
    };

    static createUser = async (data) => {
        const newUser = new users(data);
        await newUser.save();
        return newUser;
    };

    static updateUser = async (id, data) => {
        const result = await users.findByIdAndUpdate(id, { $set: data }, { new: true });
        return result;
    };

    static deleteUserById = async (id) => {
        const result = await users.findByIdAndDelete(id);
        return result;
    };

    static checkIsExistsUser = async (email) => {
        const exist = await users.findOne({ email: { $eq: email }});
        return !!exist;
    };

    static checkIsExistsUserById = async (id) => {
        const exist = await users.findById(id);
        return !!exist;
    };
};

export default UserService;
