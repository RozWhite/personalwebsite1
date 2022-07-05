var express = require('express');
var router = express.Router();

/* Get Rozita home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET Skills page . */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skills'});
  
});

/* GET Projects page . */
router.get('/project', function(req, res, next) {
  res.render('Project', { title: 'Project'});
});


/* GET CV page . */
router.get('/cv', function(req, res, next) {
  res.render('cv', { title: 'CV'});
});


/* GET Contact Me .*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
}); 


module.exports = router;
