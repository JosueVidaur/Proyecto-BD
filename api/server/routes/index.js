module.exports = app => {
  app.post("/login", (req, res) => {
    const {username, password } = req.body;
    res.status(200).send({
      message: '*****'
    })
  });
};