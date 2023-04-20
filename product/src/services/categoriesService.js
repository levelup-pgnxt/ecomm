/* eslint-disable import/extensions */
/* eslint-disable new-cap */
import Categories from '../models/Category.js';

class CategoryService {
  static getAllCategories = async () => {
    const result = await Categories.find();
    return result;
  };

  static getCategoryById = async (id) => {
    const category = await Categories.findById(id);
    return category;
  };

  static getCategoryByName = async (name) => {
    const category = await Categories.find({ nome: { $regex: name } });
    return category;
  };

  static createCategory = async (data) => {
    const newCategory = new Categories(data);
    await newCategory.save();
    return newCategory;
  };

  static updateCategory = async (id, nome) => {
    const result = await Categories.findByIdAndUpdate(id, { $set: { nome } });
    return result;
  };

  static changeStatusCategory = async (id, newStatus) => {
    const result = await Categories.findByIdAndUpdate(id, { $set: { status: newStatus } });
    return result;
  };

  static deleteCategoryById = async (id) => {
    const result = await Categories.findByIdAndDelete(id);
    return result;
  };

  static checkIsExistsCategory = async (name) => {
    const exist = await Categories.findOne({ nome: name });
    return !!exist;
  };

  static checkIsExistsCategoryById = async (id) => {
    const exist = await Categories.findById(id);
    return !!exist;
  };

  static checkIsCategoryActive = async (id) => {
    const exist = await Categories.findOne({
      _id: { $eq: id },
      status: { $eq: 'ATIVA' },
    });
    return !!exist;
  };
}

export default CategoryService;
