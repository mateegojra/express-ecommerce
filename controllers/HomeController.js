module.exports = {
  index: function(req, res)
  {
  	res.send('Its my Home Page Generated by Home Controller');
  },

  cats: function(req, res){
  	res.render('cart');
  }
};