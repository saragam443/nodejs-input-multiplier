const TextDB = require("../model/TextDB");

const getText = async (req, res) => {
  const textArray = await TextDB.find();
  if (!textArray) return res.status(204).json({ message: "not found" });
  res.json(textArray);
};

const postText = async (req, res) => {
  if (!req?.body?.text) {
    return res.status(400).json({ message: "text required" });
  }
  try {
    let newArray = [];
    for (let i = 0; i < 5; i++) {
      newArray.push(req.body.text);
    }
    const result = await TextDB.create({
      textArray: newArray,
    });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    getText, postText
}
