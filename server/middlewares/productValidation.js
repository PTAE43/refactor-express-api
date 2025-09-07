const ProductValidation = {
    validateProduct: (req, res, next) => {
        const { name, price, category, image, description } = req.body;

        if (typeof name !== "string" || !name) {
            return res.status(400).json({
                message: "Name: must be a string and not an empty string.",
            });
        }
        if (typeof price !== "number" || price === 0) {
            return res.status(400).json({
                message: "Price: must be a number and greater than 0",
            });
        }
        if (typeof image !== "string" || !image) {
            return res.status(400).json({
                message: "Image: Must be a string and not an empty string.",
            });
        }
        if (typeof description !== "string" || !description || description.length >= 10) {
            return res.status(400).json({
                message: "Description: Must be a string, not an empty string, and at least 10 characters long.",
            });
        }
        if (typeof category !== "string" || !category) {
            return res.status(400).json({
                message: "Category: Must be a string and not an empty string.",
            });
        }

        next();
    },
};

export default ProductValidation;