const router = require("express").Router();
const { Projects } = require("../models");

router.get("/projects", (req, res) => {
  Projects.find()
    .then((project) => res.json(project))
    .catch((err) => console.log(err));
});

router.post("/projects", (req, res) => {
  Projects.create(req.body)
    .then((project) => res.json(project))
    .catch((err) => console.log(err));
});

// router.put('/project/:id', (req, res) => {
//   project.findByIdAndUpdate(req.params.id, req.body)
//     .then(project => res.json(project))
//     .catch(err => console.log(err))
// })

router.delete("/projects/:id", (req, res) => {
  Projects.findById(req.params.id)
    .then((project) => project.remove())
    .then((project) => res.json(project))
    .catch((err) => console.log(err));
});

module.exports = router;
