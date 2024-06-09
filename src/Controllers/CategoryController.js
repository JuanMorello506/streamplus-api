import { Category } from "../Models/models.js";

class CategoryControllers {
  createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const { name: categoryName } = await Category.create({
        name,
      });
      res.status(200).send({ success: true, message: categoryName });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllCategories = async (req, res) => {
    try {
      const data = await Category.findAll({
        attributes: ["id", "name"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.findOne({
        where: {
          id,
        },
        attributes: ["id", "name"],
      });
      if (!data) throw new Error("Category not found");
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Category.update({ name }, { where: { id } });
      if (updated === 0) throw new Error("Category not found or no change made");
      res.status(200).send({ success: true, message: "Category updated successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Category.destroy({ where: { id } });
      if (deleted === 0) throw new Error("Category not found");
      res.status(200).send({ success: true, message: "Category deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default CategoryControllers;
