// import {Router} from 'express'
// import { deleteProduct, getAllProduct, getDetailProduct } from '../controllers/products'

// const router = Router()
// router.get('/products', getAllProduct)
// router.get('/products/:id', getDetailProduct)
// router.delete('/products/:id', deleteProduct)
// // router.get('/products', getAllProduct)
// export default router

import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/products";

const routerProduct = Router();
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getDetailProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.post("/", createProduct);
routerProduct.put("/:id", updateProduct);
export default routerProduct;
