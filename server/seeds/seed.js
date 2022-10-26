const db = require('../config/connection');
const { List, User } = require('../models');

const toDoData = require('./toDoData.json');

db.once('open', async () => {
  await List.deleteMany({});

  const lists = await List.insertMany(toDoData);

  console.log('List seeded!');
  process.exit(0);
});
