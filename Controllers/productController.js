import productServices from "../Services/productServices.js"

// Create new product
const createProduct = async(req , res) => {
    try {
            const newProduct =  await productServices.createProduct(req.body);
            return res.status(201).json(newProduct)
    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400).json({message: "Invalid product data"})
        }

        if (error.code === 11000) {
            return res.status(400).json({message: "Duplicate productNumber"})
        }

        return res.status(500).json({errorMessage:error.message})
    }
}

// Delete product 
const deleteProduct = async(req, res) => {
    try {
        const productNumber = req.params.productNumber
        
        if (!productNumber) {
            return res.status(400).json({ errorMessage: "Product ID is required" });
        }

        const productToDelete = await productServices.deleteProduct(productNumber);

        if (!productToDelete) {
            return res.status(404).json({ errorMessage: "Product not found" });
        } 

        return res.status(200).json({ message: "Product deleted successfully"});
        
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}



// Get product by id
const getProductByNumber = async(req , res) => {
    try {
        const productNumber = req.params.productNumber;
        if (!productNumber) {
            return res.status(400).json({ errorMessage: "Product ID is required" });
        }

        const product = await productServices.getProductByNumber(productNumber)

        if (!product) {
            return res.status(404).json({ errorMessage: "Product not found" });
        }
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await productServices.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

// Edit product by number
const updateProduct = async(req , res) => {
    try {
        const productNumber = req.params.productNumber;
        const productData = req.body;

        if (!productNumber) {
            return res.status(400).json({ errorMessage: "Product ID is required" });
        }

        const updatedProduct = await productServices.updateProduct(productNumber , productData);

        if (!updatedProduct) {
            return res.status(404).json({ errorMessage: "Product not found."});
        }

        return res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}


const productController={
    createProduct,
    deleteProduct,
    getProductByNumber,
    getAllProducts,
    updateProduct,
}

export default productController;
