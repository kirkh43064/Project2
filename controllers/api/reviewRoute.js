const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Book } = require('../../Models');
const { Author } = require('../../Models');

router.post('/api/reviews', withAuth, async (req, res) => {
  try {
    const newReview = await Books.create({
        ...req.body,
        rating: req.session.rating,
        review: req.session.review,
        
    });

    res.status(200).json(newReview);
  } catch (err) {
        res.status(400).json(err);
  }
});

router.get('api/reviews/:book_id', async (req, res) => {
  try {
    const bookData = await Books.get({
      where: {
        book_id: req.params.id,
        rating: req.session.rating,
        review: req.session.review,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api/author/:author', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const authorData = await Authors.findAll({
          where: {author_id: req.params.author },
            include: [
            {
                model: Book,
            },
        ],
      });
  
      // Serialize data so the template can read it
      const authors = authorData.map((authors) => authors.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        authors, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
