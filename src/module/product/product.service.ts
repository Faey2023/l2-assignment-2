import { TProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (payload: TProduct): Promise<TProduct> => {
  const result = await Product.create(payload);
  return result;
};

const getProduct = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data);
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
