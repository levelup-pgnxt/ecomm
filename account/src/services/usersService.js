import users from '../models/User.js';

class UserService {

    static getAllUsers = async () => {
        return await users.find();
    };

    static getUserById = async (id) => {
        const category = await users.findById(id);
        return category;
    };

    static getUserByName = async (name) => {
        const category = await users.find({ nome: { $regex: name }});
        return category;
    };

    static createUser = async (data) => {
        const newUser = new users(data);
        await newUser.save();
        return newUser;
    };

    static updateUser = async (id, nome) => {
        const result = await users.findByIdAndUpdate(id, { $set: { nome: nome } });
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
