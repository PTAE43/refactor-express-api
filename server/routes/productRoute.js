import { Router } from "express";
import ProductController from "../controllers/productController.js";
import ProductValidation from "../middlewares/productValidation.js";

const ProductRoute = {
    createRouter: () => {
        const productRouter = Router();

        productRouter.route("/")
            .get(ProductController.getAllProducts)
            .post(
                ProductValidation.validateProduct,
                ProductController.createProduct);

        productRouter.route("/:id")
            .get(ProductController.getProductById)
            .put(
                ProductValidation.validateProduct,
                ProductController.updateProduct)
            .delete(ProductController.deleteProduct);

        return productRouter;
    },
};

export default ProductRoute;