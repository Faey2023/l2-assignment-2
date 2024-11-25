import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await productService.createProduct(payload);

    const response = {
      _id: result._id,
      name: result.name,
      brand: result.brand,
      price: result.price,
      type: result.type,
      description: result.description,
      quantity: result.quantity,
      inStock: result.inStock,
      createdAt: result.createdAt || new Date().toISOString(),
      updatedAt: result.updatedAt || new Date().toISOString(),
    };

    res.json({
      message: 'Bicycle created successfully',
      success: true,
      data: response,
      // data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Error',
      error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProduct();

    res.send({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    const result = await productService.getSingleProduct(id);

    res.json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;

    const result = await productService.updateProduct(id, body);

    res.json({
      message: 'Bicycle updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    await productService.deleteProduct(id);

    res.json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.json(error);
  }
};

export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
