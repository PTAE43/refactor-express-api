import productService from "../services/productService.js"

// Products routes
const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const name = req.query.keywords;
            const category = req.query.category;
            const products = await productService.getAllProducts(name, category);
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
            const product = await productService.getProductById(productId);
            if (!product) {
                return res.status(404).json({
                    message: "Product not found.",
                });
            }
            return res.status(200).json({
                message: `Product Id ${productId} has been created successfully`,
                data: product
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    createProduct: async (req, res) => {
        try {
            const productData = { ...req.body, created_at: new Date() };
            const product = await productService.createProduct(productData);
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
            const product = await productService.updateProduct(newProductData);
            return res.status(200).json({
                message: `Movie record ${newProductData} has been updated successfully`,
                data: product
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = new ObjectId(req.params.id);
            const product = await productService.deleteProduct(productId);
            return res.status(200).json({
                message: `Movie record ${productId} has been deleted successfully`,
                data: product
            });

        } catch (error) {
            return res.status(500).json({ message: `Error: ${error.message}`, });
        }
    },
};

export default ProductController;