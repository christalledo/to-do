const { List, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        list: async () => {
            return List.find({});
        },
        todo: async () => {
            return todo.find({});
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
            const toDoList = await todo.create(args);
            return toDoList;
        },
        deleteToDo: async (parent, args) => {
            const deletedToDoList = await todo.delete(args);
            return deletedToDoList;
        },
        updateToDo: async (parent, args) => {
            const updatedToDoList = await todo.post(args);
            return updatedToDoList;
        },

    },
}
module.exports = resolvers;