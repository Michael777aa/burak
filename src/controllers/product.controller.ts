import { Request, Response } from "express";
import Errors from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";



const productService = new ProductService();

const productController: T = {}; 
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllproducts"); 
        res.send("products");
      
    }catch(err) {
        console.log("Error, getAllproducts:", err);
        
        
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({}); 
        
    }
};

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct");
        res.send("DONE");
    }catch(err) {
        console.log("Error, createNewProduct:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({}); 
        
    }
};


productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");
        res.send("UPDATE");
    }catch(err) {
        console.log("Error, updateChosenProduct:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({}); 
        
    }
};







export default productController;