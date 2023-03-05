/* eslint-disable import/extensions */
/* eslint-disable new-cap */
import categories from '../models/Category.js';

class CategoryService {
  static getAllCategories = async () => {
    const result = await categories.find();
    return result;
  };

  static getCategoryById = async (id) => {
    const category = await categories.findById(id);
    return category;
  };

  static getCategoryByName = async (name) => {
    const category = await categories.find({ nome: { $regex: name } });
    return category;
  };

  static createCategory = async (data) => {
    const newCategory = new categories(data);
    await newCategory.save();
    return newCategory;
  };

  static updateCategory = async (id, nome) => {
    const result = await categories.findByIdAndUpdate(id, { $set: { nome } });
    return result;
  };

  static changeStatusCategory = async (id, newStatus) => {
    const result = await categories.findByIdAndUpdate(id, { $set: { status: newStatus } });
    return result;
  };

  static deleteCategoryById = async (id) => {
    const result = await categories.findByIdAndDelete(id);
    return result;
  };

  static checkIsExistsCategory = async (name) => {
    const exist = await categories.findOne({ nome: name });
    return !!exist;
  };

  static checkIsExistsCategoryById = async (id) => {
    const exist = await categories.findById(id);
    return !!exist;
  };

  static checkIsCategoryActive = async (id) => {
    const exist = await categories.findOne({
      _id: { $eq: id },
      status: { $eq: 'ATIVA' },
    });
    return !!exist;
  };
}

export default CategoryService;
