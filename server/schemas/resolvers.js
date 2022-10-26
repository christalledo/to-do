const { List, User } = require('../models');

const resolvers = {
    Query: {
        User: async () => {
            return User.find({});
        },
        List: async () => {
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
            const updatedList = await List.delete(args);
            return updatedList;
        }
    },
};

module.exports = resolvers;