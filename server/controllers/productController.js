import productService from "../services/productController.js"

// Products routes
const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const name = req.query.keywords;
            const category = req.query.category;
            const query = {};
            if (name) {
                query.name = new RegExp(name, "i");
            }
            if (category) {
                query.category = new RegExp(category, "i");
            }
            const products = await ProductController.getAllProducts(name, category);
            return res.status(200).json({
                data: products
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    getProductById: async (req, res) => {
        try {
            const productId = new ObjectId(req.params.id);
            const product = await ProductController.getProductById(productId);
            if (!product) {
                return res.status(404).json({
                    message: "Product not found.",
                });
            }
            return res.status(200).json({
                data: productId
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    createProduct: async (req, res) => {
        try {
            const productData = { ...req.body, created_at: new Date() };
            const product = await ProductController.createProduct(productData);
            return res.status(200).json({
                data: product
            });
        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const newProductData = { ...req.body, modified_at: new Date() };
            const product = await ProductController.updateProduct(newProductData);
            return res.status(200).json({
                data: product
            });
        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = new ObjectId(req.params.id);
            const product = await ProductController.deleteProduct(productId);
            return res.status(200).json({
                data: product
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },
};





app.get("/products", async (req, res) => {
    try {


        
        return res.json({ data: allProducts });
    } catch (error) {
        return res.json({ message: `${error}` });
    }
});

app.get("/products/:id", async (req, res) => {
    try {


        

        return res.json({ data: productById });
    } catch (error) {
        return res.json({ message: `${error}` });
    }
});

app.post("/products", async (req, res) => {
    try {

        
        return res.json({
            message: `Product Id ${newProductData.insertedId} has been created successfully`,
        });
    } catch (error) {
        return res.json({ message: `${error}` });
    }
});

app.put("/products/:id", async (req, res) => {
    try {

        const productId = new ObjectId(req.params.id);

        
        return res.json({
            message: `Movie record ${productId} has been updated successfully`,
        });
    } catch (error) {
        return res.json({ message: `${error}` });
    }
});

app.delete("/products/:id", async (req, res) => {
    try {


        

        return res.json({
            message: `Movie record ${productId} has been deleted successfully`,
        });
    } catch (error) {
        return res.json({ message: `${error}` });
    }
});