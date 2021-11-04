const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ludde',
  host: 'localhost',
  database: 'nordicgods',
  password: 'root',
  port: 5432,
}); 

const getGods = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM gods ORDER BY name ASC', (error, results) => {
      if(error) {
        console.log(error);
      }
      console.log('All gods fetched');
      resolve(results.rows);
    })
  })
}

const getGod = (name) => {
  return new Promise(function(resolve, reject) {
    const name_god = name
    pool.query('SELECT * FROM gods WHERE name=$1', [name_god], (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log('God with name ' + name_god + ' fetched');
      resolve(results.rows);
    })
  }) 
}

const getCreatures = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM creatures ORDER BY name ASC', (error, results) => {
      if(error) {
        console.log(error);
      }
      console.log('All creatures fetched');
      resolve(results.rows);
    })
  })
}

const getCreature = (name) => {
  return new Promise(function(resolve, reject) {
    const name_creature = name
    pool.query('SELECT * FROM creatures WHERE name=$1', [name_creature], (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log('Creature with name ' + name_creature + ' fetched');
      resolve(results.rows);
    })
  }) 
}

const getLores = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM lore ORDER BY name ASC', (error, results) => {
      if(error) {
        console.log(error);
      }
      console.log('All lore fetched');
      resolve(results.rows);
    })
  })
}

const getLore = (name) => {
  return new Promise(function(resolve, reject) {
    const name_lore = name
    pool.query('SELECT * FROM lore WHERE name=$1', [name_lore], (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log('Lore with ' + name + ' fetched');
      resolve(results.rows);
    })
  }) 
}

module.exports = {
  getGods,
  getGod, 
  getCreatures,
  getCreature,
  getLores,
  getLore
}
