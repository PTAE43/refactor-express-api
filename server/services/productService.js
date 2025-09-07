import ProductRepository from "../repositories/productRepository";

const ProductService = {
    getAllProducts: async (name, category) => {
        const query = {};
        if (name) {
            query.name = new RegExp(name, "i");
        }
        if (category) {
            query.category = new RegExp(category, "i");
        }
        return await ProductRepository.findAll(query); //ส่งต่อให้ Repository
    },

    getProductById: async (id) => {
        return await ProductRepository.findById(id); //ส่งต่อให้ Repository
    },

    createProduct: async (productData) => {
        // const productData = { ...req.body, created_at: new Date() };
        const data = { ...productData, created_at: new Date() };
        return await ProductRepository.create(data); //ส่งต่อให้ Repository
    },

    updateProduct: async (id, productData) => {
        // const newProductData = { ...req.body, modified_at: new Date() };
        const data = { ...productData, modified_at: new Date() };
        return await ProductRepository.update(id, data);

    },

    deleteProduct: async (id) => {
        return await ProductRepository.delete(id);
    },
};

export default ProductService;