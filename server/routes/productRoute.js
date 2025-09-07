import { Router } from "express";

const ProductRoute = {
    createRouter: () => {
        const productRouter = Router();

        productRouter.get("/")
        productRouter.get("/:id")
        productRouter.post("/")
        productRouter.put("/:id")
        productRouter.delete("/:id")

        return productRouter;
    },
};

export default ProductRoute;