class UsersCustomer {
    constructor () {
        this.usersCustomer = [];
    };

    push ({ nome, email, senha }) {
        const id = this.getId();
        const date = new Date();
        const createdDate = Date.parse(date.toISOString('YYYY-MM-DD'));
        console.log(id, createdDate);
        const newUser = { id, name: nome, email, password: senha, createdDate }
        this.usersCustomer.push(newUser);
        return newUser;
    };
    
    getId () {
        if (this.usersCustomer.length === 0) {
            return 1;
        }
        const lastIndex = this.usersCustomer.length - 1;
        return this.usersCustomer[lastIndex].id + 1
    };
};

const users = new UsersCustomer();

const data = {
    nome: "Paulo Leite",
    email: "phvleite@gmail.com",
    senha: "123456"
}

const data2 = {
    nome: "Paulo Leite",
    email: "phvleite@gmail.com",
    senha: "123456"
}

console.log(users.push(data));
console.log(users.push(data2));
