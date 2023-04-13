const fs = require("fs");
const path = require("path");

const imgDir = "public/imgs";

const fileNames = fs.readdirSync(imgDir);

const cardData = fileNames.map((fileName, index) => {
  return {
    id: index + 1, // generate new ID based on index
    front: "media/FS.png",
    back: path.join("imgs", fileName), // use file name as back value
    matched: false,
  };
});

fs.writeFileSync("card-data.txt", JSON.stringify(cardData));
