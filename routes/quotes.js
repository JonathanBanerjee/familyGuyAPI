// const express = require("express");
// const router = express.Router();

// const familyguy = require("../familyguy.json");

// router.post("/", (req, res) => {
//   console.log(req.body);
//   familyguy.push(req.body);
//   res.redirect("/quotes");
// });

// router.delete("/", (req, res) => {
//   const { id } = req.query;
//   const index = familyguy.findIndex((guy) => {
//     return guy.id === Number(id);
//   });
//   familyguy.splice(index, 1);
//   res.send("ok");
// });

// router.patch("/", (req, res) => {
//   const { id } = req.query;
//   const index = familyguy.findIndex((guy) => {
//     return guy.id === Number(id);
//   });

//   if (index !== -1) {
//     Object.assign(familyguy[index], req.body);
//     res.send("ok");
//   } else {
//     res.status(404).send("Not Found");
//   }
// });

// router.get("/", (req, res) => {
//   let _familyguy = [...familyguy];

//   //Filter based on search
//   if (req.query.character) {
//     _familyguy = _familyguy.filter((char) => {
//       return char.character
//         .toLowerCase()
//         .includes(req.query.character.toLowerCase());
//     });
//   }

//   //Chops down based on number of requests

//   const num = req.query.num || 1;

//   if (num && num < 0) {
//     res.status(400).send();
//     return;
//   }

//   if (num && num < _familyguy.length) {
//     _familyguy.length = num;
//   }
//   res.send(_familyguy);
// });

// module.exports = router;

router.post("/", (req, res) => {
  const { character_name, quote } = req.body;

  queryMySQL(`INSERT INTO characters
                (character_name, quote)
                    VALUES
                    ("${character_name
                      .replaceAll(`'`, `\\'`)
                      .replaceAll(`"`, `\\"`)}",
                    "${quote.replaceAll(`'`, `\\'`).replaceAll(`"`, `\\"`)}")`);

  res.send({ status: 1 });
});

router.get("/", async (req, res) => {
  const num = req.query.num || 1;

  const results = await queryMySQL(`SELECT * FROM characters
                                      WHERE character_name LIKE "%${req.query.character}%"
                                        LIMIT ${num};`);

  res.send(results);
});
