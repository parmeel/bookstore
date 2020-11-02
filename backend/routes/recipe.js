const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Recipe = require("../models/recipe");

router.get("/all-recipes", (req, res, next) => {
  //res.json({all_recipes: true});
  Recipe.find().then(documents => {
    res.status(200).json({
        message: "Recipes fetched successfully!",
        Recipes: documents
    });
  });
})


router.get("/recipes/:id", (req, res, next) => {
  Recipe.findById(req.params.id).then(Recipe => {
      if (Recipe) {
          res.status(200).json(Recipe);
      } else {
          res.status(404).json({ message: "Recipe not found!" });
      }
  });
});

router.post("/recipes", (req, res, next) => {
  console.log("body",req.body)

  const recipe = new Recipe({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    cuisine: req.body.cuisine,
    name: req.body.name,
    date: req.body.date,
  });

  console.log(recipe.disc);
  recipe.save().then(createdRecipe => {
    res.status(201).json({
        message: "Recipe added successfully",
        recipe: createdRecipe
    });
  });
})


router.delete("/recipes/:id", (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Recipe deleted!" });
  });
});

router.put("/recipes/:id",
    (req, res, next) => {
        const recipe = new Recipe({
            _id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            cuisine: req.body.cuisine,
            name: req.body.name,
            date: req.body.date
        });
        console.log(recipe);
        console.log(req.params.id);
        // 5df94d18f0194c4cc2833f78
        recipe.updateOne({ _id: req.params.id }, Recipe).then(result => {
          /*
            res.status(200).json({
                message: "Update successful!"
            });
            */
           res.status(200).json(recipe);
        });
    }
);


module.exports = router;
