var express = require('express');
var router = express.Router();

/* Get Rozita home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me . */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skills'});
  
});

/* GET Projects page . */
router.get('/cv', function(req, res, next) {
  res.render('cv', { title: 'CV'});
});



/* GET Contact Me .*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
}); 

/*router.post("/contact", (req, res, next) => {

  res.render("contact", { title: "Contact Me" ,message:"yes"});
});  */

module.exports = router;
