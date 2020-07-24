
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { characterName: 'slob', class: 'dual blade' },
        { characterName: 'knob', class: 'shadower' }
      ]);
    });
};
