import Product from "../model/productModel.js"

// Create new product
const createProduct = async (productData) => {
    try {
        // Find the largest product number
        const lastProduct = await Product.findOne().sort({ id: -1});

        // Current product number
        const productNumber = lastProduct ? lastProduct + 1 : 1;

        const productToSave = new Product({
            ...productData,
            productNumber: productNumber
        })

        const savedProduct = await productToSave.save();
        return savedProduct;
    } catch(error) {
        console.log("Error in createProductServices: " , error);
        throw new Error("Failed to create product" + error.message)
    }
    
}

// Delete product by number
const deleteProduct = async (productNumber) => {
    try {
        return await Product.findOneAndDelete(productNumber);
    } catch (error) {
        throw new Error("Failed to delete product: " + error.message);
    }

}


// Get product by number
const getProductByNumber = async (productNumber) => {
    try{
        return await Product.findOne(productNumber);
    }
    catch (error) {
        throw new Error("Failed to get product by number" + error.message);
    }
}


// Get all products
const getAllProducts = async () => {
    try{
        return await Product.find({});
    }
    catch (error) {
        throw new Error("Failed to get product by number" + error.message);
    }
}

//Edit product by id
const updateProduct = async (productNumber , productData) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            {productNumber} ,
            productData,
            {new: true}
        );

        return updatedProduct

    } catch (error) {
        throw new Error("Failed to update product: " + error.message);
    }
}

const productServices ={
    createProduct,
    deleteProduct,
    getProductByNumber,
    getAllProducts,
    updateProduct,
};

export default productServices;