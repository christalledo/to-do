const { List, User, Todo } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        list: async () => {
            return List.find({});
        },
        todo: async () => {
            return Todo.find({});
        },
    },
    Mutation: {
        createList: async (parent, args) => {
            const list = await List.create(args);
            return list;
        },
        deleteList: async (parent, args) => {
            const deletedList = await List.delete(args);
            return deletedList;
        },
        updateList: async (parent, args) => {
            const updatedList = await List.post(args);
            return updatedList;
        },
        createToDo: async (parent, args) => {
            const toDoList = await Todo.create(args);
            return toDoList;
        },
        deleteToDo: async (parent, args) => {
            const deletedToDoList = await Todo.delete(args);
            return deletedToDoList;
        },
        updateToDo: async (parent, args) => {
            const updatedToDoList = await Todo.post(args);
            return updatedToDoList;
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

    },
}
module.exports = resolvers;