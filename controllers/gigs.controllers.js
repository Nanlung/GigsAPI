
const Gig = require('../models/gigs.model.js');

exports.create = (req, res) => {
  const gig =  {
    title: req.body.title,
    technologies: req.body.technologies,
    description: req.body.description,
    budget: req.body.budget,
    contact_email: req.body.contact_email
  }
  Gig.create(gig)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the gig."
      });
    });
};

// find all controller
exports.findAll = async(req,res) => {
  const gigs = await Gig.findAll();
  res.status(200).send(gigs);
};