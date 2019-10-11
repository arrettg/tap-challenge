let getProducts = (req, res) => {
  const db = req.app.get("db");
  db.get_products()
    .then(products => {
      res.json(products);
    })
    .catch(err => console.log(err));
};
let getProduct = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.get_product(id)
    .then(product => res.status(200).send(product))
    .catch(err => {
      console.log(err);
    });
};

let addLike = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.add_like(id)
    .then(product => res.sendStatus(200))
    .catch(err => {
      console.log(err);
    });
};

let dislike = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.dislike(id)
    .then(product => res.sendStatus(200))
    .catch(err => {
      console.log(err);
    });
};
module.exports = {
  getProducts,
  getProduct,
  addLike,
  dislike
};
