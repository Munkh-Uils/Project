const Redirect = require("../models/url.model");

const getUrl = async (req, res) => {
    const result = await Url.findById(req.params.id);
    res.send(result);
}

const generate = async (req, res) => {
    const { url } = req.body;
  
    if (!url) {
      return res.status(400).send("URL is required");
    }
  
    try {
      const redirect = await Redirect.create({ url });
      res.status(201).json(redirect);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error, try again");
    }
  };

  const redirect = async (req, res) => {
    const { id } = req.params.id;
  
    try {
      const redirect = await Redirect.findById(id);
  
      if (!redirect) {
        return res.status(404).send("Redirect not found");
      }
  
      const { url } = redirect;
  
      res.redirect(url);
    } catch (error) {
      res.status(500).send("Error, try again");
    }
  };

module.exports = { getUrl, generate, redirect };