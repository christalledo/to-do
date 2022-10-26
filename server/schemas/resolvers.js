const { List, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        list: async () => {
            return List.find({})
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
            const updatedList = await List.update(args);
            return updatedList;
        }
    },
};

module.exports = resolvers;