const router = require("express").Router();
const Product = require("../models/product");
const User = require("../models/Users");

// get product
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      trademark,
      price,
      category,
      images: pictures,
      description,
    } = req.body;
    const product = await Product.create({
      name,
      trademark,
      price,
      category,
      pictures,
      description,
    });
    const products = await Product.find();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    const similar = await Product.find({ category: product.category }).limit(4);
    res.status(200).json({ product, similar });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {
      name,
      trademark,
      price,
      category,
      images: pictures,
      description,
    } = req.body;
    const product = await Product.findByIdAndUpdate(id, {
      name,
      trademark,
      price,
      category,
      pictures,
      description,
    });
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    await Product.findByIdAndDelete(id)
    const products = await Product.find();
    res.status(200).json(products)
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/add-to-cart", async (req, res) => {
  const { userId, productId, price } = req.body;

  try {
    const user = await User.findById(userId);
    const userCart = user.cart;
    if (user.cart[productId]) {
      userCart[productId] += 1;
    } else {
      userCart[productId] = 1;
    }
    userCart.count += 1;
    userCart.total = Number(userCart.total) + Number(price);
    user.cart = userCart;
    user.markModified("cart");
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/increase-to-cart", async (req, res) => {
  const { userId, productId, price } = req.body;

  try {
    const user = await User.findById(userId);
    const userCart = user.cart;
    userCart.total += Number(price);
    userCart.count += 1;
    userCart[productId] += 1;
    user.cart = userCart;
    user.markModified("cart");
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/decrease-to-cart", async (req, res) => {
  const { userId, productId, price } = req.body;
  try {
    const user = await User.findById(userId);
    const userCart = user.cart;
    userCart.total -= Number(price);
    userCart.count -= 1;
    userCart[productId] -= 1;
    user.cart = userCart;
    user.markModified("cart");
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/remove-from-cart", async (req, res) => {
  const { userId, productId, price } = req.body;
  try {
    const user = await User.findById(userId);
    const userCart = user.cart;
    userCart.total -= Number(userCart[productId]) * Number(price);
    userCart.count -= userCart[productId];
    delete userCart[productId];
    user.cart = userCart;
    user.markModified("cart");
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
