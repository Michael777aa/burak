import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import { uploadProductImage } from "./libs/utils/uploader";

routerAdmin.get("/", restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);

routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// Product

routerAdmin.get(
    "/product/all",
    restaurantController.verifyRestaurant,
    productController.getAllproducts);

routerAdmin.post(
    "/product/create",
    restaurantController.verifyRestaurant,
    uploadProductImage.single("productImage"),
    productController.createNewProduct);

routerAdmin.post(
    "/product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct);

export default routerAdmin;  