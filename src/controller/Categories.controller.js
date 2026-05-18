const { categories, courses, sections, lessons } = require("../models");

// FOR ADMIN ONLY THAT CAN DO ALL OF THESE 
// VIEW COURSES EVERYONE CAN VIEW IT

const createCategory = async (req, res) => {
  const { name, iconUrl } = req.body;

  const category = await categories.create({
    name,
    iconUrl,
  });

      // CHECK IF CATEGORY ALREADY EXISTS
    const existing = await categories.findOne({ where: { name } });
    if (existing) {
      return res.status(400).json({ message: "Category already exists!" });
    }

  res.json({
    message: "Create category for course successfully!",
    category,
  });
};

const viewCategory = async (req, res) => {
    const allCategories = await categories.findAll({
      attributes: ['id', 'name', 'iconUrl'],
      include: [{
        model: courses,
        as: 'courses',
        attributes: ['id', 'title_en', 'price', 'thumbnailUrl', 'avgRating', 'totalStudents'],
        through: { attributes: [] },  // hide junction table
        include: [{
          model: sections,
          as: 'sections',
          attributes: ['id', 'title', 'position'],
          include: [{
            model: lessons,
            as: 'lessons',
            attributes: ['id', 'title', 'duration_secs', 'is_free_preview', 'position']
          }]
        }]
      }]
    });

  res.json({
    message: "Categories for course!",
    categories : allCategories,
  });
};

const updateCategory = async (req, res) => {
    const {id} = req.params
    const { name, iconUrl } = req.body;

    const findCategory = await categories.findByPk(id) ;

    if (!findCategory) {
        return res.json({message :"category not found!"})
    }

    // PREVENT OVERWRITE VALUE WHEN ADMIN IS NOT CLICK CONFIRM BUTTON
    // OR PREVENT FROM UNDEFINDED AND NULL VALUE
  const category = await findCategory.update({
      name: name || category.name,
      iconUrl: iconUrl || category.iconUrl
  });

  res.json({
    message: "Update category for course successfully!",
    category,
  });
};

const deleteCategory = async (req, res) => {
    const {id} = req.params

    const category = await categories.findByPk(id) ;

    if (!category) {
        return res.json({message :"category not found!"})
    }

  await category.destroy();

  res.json({
    message: "Delete category for course successfully!",
  });
};

module.exports = {
  createCategory,
  viewCategory,
  updateCategory,
  deleteCategory
};
