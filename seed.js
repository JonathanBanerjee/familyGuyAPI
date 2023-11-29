const mySQLQuery = require("./mysql/connection");
const familyguy = require("./familyguy.json");

familyguy.forEach((char) => {
  console.log(`INSERT INTO characters
  (character_name, quote)
      VALUES
          ("${char.character.replaceAll(`'`, `\\'`).replaceAll(`"`, `\\"`)}",
          "${char.quote.replaceAll(`'`, `\\'`).replaceAll(`"`, `\\"`)}");`);
  mySQLQuery(`INSERT INTO characters
                        (character_name, quote)
                            VALUES
                                ("${char.character
                                  .replaceAll(`'`, `\\'`)
                                  .replaceAll(`"`, `\\"`)}",
                                "${char.quote
                                  .replaceAll(`'`, `\\'`)
                                  .replaceAll(`"`, `\\"`)}");`);
});
