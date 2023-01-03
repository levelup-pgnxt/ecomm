class UsersCustomer {
    constructor () {
        this.usersCustomer = [];
    };

    push ({ nome, email, senha }) {
        const id = this._getId();
        const createdDate = new Date().toLocaleDateString('sv');
        const newUser = {
            id,
            name: nome,
            email,
            password: senha,
            createdDate
        }
        this.usersCustomer.push(newUser);
        return newUser;
    };
    
    _getId () {
        if (this.usersCustomer.length === 0) return 1;
        const lastIndex = this.usersCustomer.length - 1;
        return this.usersCustomer[lastIndex].id + 1;
    };

    listAllUsers () {
        const allUsers = [];
        this.usersCustomer.forEach((user) => {
            allUsers.push([user.id, user.name, user.email, user.createdDate]);
        });
        return allUsers;
    };
};

export default UsersCustomer;
