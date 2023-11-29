const mySQLQuery = require("./mysql/connection");
const familyguy = require("./familyguy.json");

familyguy.forEach(() => {
  mySQLQuery(`UPDATE
    characters SET character_name = "Jonathan"
  WHERE
    id = 1;          `);
});

// UPDATE stats SET played = 27
// WHERE person_id = 9;
// router.patch("/", (req, res) => {
//   const { id } = req.query;
//   const index = familyguy.findIndex((guy) => {
//     return guy.id === Number(id);
//   });
