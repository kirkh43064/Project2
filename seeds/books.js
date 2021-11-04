const { Book } = require('../Models');
const sequelize = require('../config/connection');

const bookdata = [
    { 
      author_id:1,
      title: 'The Judges List',
      author: 'John Grisham',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'THE LINCOLN HIGHWAY',
      author: 'Amor Towles',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'THE WISH',
      author: 'Nicholas Sparks',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'STATE OF TERROR',
      author: 'Hillary Rodham Clinton',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'CLOUD CUCKOO LAND',
      author: 'Anthony Doerr',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'DEAR SANTA',
      author: 'Debbie Macomber',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'APPLES NEVER FALL',
      author: 'Liane Moriarty',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'OH WILLIAM!',
      author: 'Elizabeth Strout',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'THE LAST THING HE TOLD ME',
      author: 'Laura Dave',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'SILVERVIEW',
      author: 'John Le Carré',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'BILLY SUMMERS',
      author: 'Stephen King',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'THE MIDNIGHT LIBRARY',
      author: 'Matt Haig',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'CROSSROADS',
      author: 'Jonathan Franzen',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'HARLEM SHUFFLE',
      author: 'Colson Whitehead',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      author_id:1,
      title: 'THE BUTLER',
      author: 'Danielle Steel',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
]
const seedDatabase = async () => {
  await sequelize.sync();

  await Book.bulkCreate(bookdata, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
seedDatabase();
