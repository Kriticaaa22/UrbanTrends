const DB = require("../db");


// Get all products
const getProducts = async (req, res) => {
  const { categories, type} = req.query;

  let query = "SELECT * FROM products WHERE 1=1";
  let queryParams = [];

  if (categories) {
    query += " AND forWho = ?";
    queryParams.push(categories.toLowerCase());
  }

  if (type) {
    const typesArray = type.split(",");
    const placeholders = typesArray.map(() => "?").join(",");
    query += ` AND type IN (${placeholders})`;
    queryParams.push(...typesArray);
  }

  DB.query(query, queryParams, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    return res.status(200).json(result);
  });
};

// Get a single product by ID
const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM products WHERE id = ?";

  DB.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    return res.status(200).json(result);
  });
};

// Admin: Add a new product
const addProduct = async (req, res) => {
  const { name, description, price, size, color, forWho, type } = req.body;

  if (!name || !price || !forWho || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `INSERT INTO products (name, description, price, size, color, forWho, type) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, description, price, size, color, forWho.toLowerCase(), type];

  DB.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res.status(201).json({ message: "Product added successfully", productId: result.insertId });
  });
};

// Admin: Update product details
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, size, color, forWho, type } = req.body;

  console.log("Request Params:", req.params);
  console.log("Request Body:", req.body);

  // Ensure required fields are present
  if (!id || !name || !price || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `UPDATE products SET name=?, description=?, price=?, size=?, color=?, forWho=?, type=? WHERE id=?`;
  
  // Ensure `forWho` is a string before calling `.toLowerCase()`
  const formattedForWho = forWho ? forWho.toLowerCase() : null;

  const values = [name, description, price, size, color, formattedForWho, type, id];

  DB.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res.status(200).json({ message: "Product updated successfully" });
  });
};


// Admin: Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM products WHERE id = ?";

  DB.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  });
};


const removeFavorite = async (req, res) => {
  const { user_id, id } = req.body;
  const query = "delete from favorites where user_id = ? and id = ?";

  DB.query(query, [user_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "database error" });
    }
    return res.status(200).json({ message: "product removed from favorites" });
  });
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  removeFavorite,
};
