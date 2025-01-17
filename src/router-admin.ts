import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
/** RESTAURANT SECTION */
const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)

  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );

routerAdmin.get("/logout", restaurantController.logout);

/** PRODUCT */

routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
); // middleware is used
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/** USER */

routerAdmin.get("/user/all", restaurantController.verifyRestaurant, restaurantController.getUsers);
routerAdmin.post("/user/edit", restaurantController.verifyRestaurant, restaurantController.updateChosenUser);


export default routerAdmin;