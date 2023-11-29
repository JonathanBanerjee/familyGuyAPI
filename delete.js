const mySQLQuery = require("./mysql/connection");
const familyguy = require("./familyguy.json");

familyguy.forEach(() => {
  mySQLQuery(`DELETE
  FROM
    characters
  WHERE
    character_name = "Stewie Griffin";          `);
});
