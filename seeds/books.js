const { Books } = require('../models');

const bookdata = [
    { 
      title: 'The Judges List',
      author: 'John Grisham',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'THE LINCOLN HIGHWAY',
      author: 'Amor Towles',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'THE WISH',
      author: 'Nicholas Sparks',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'STATE OF TERROR',
      author: 'Hillary Rodham Clinton',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'CLOUD CUCKOO LAND',
      author: 'Anthony Doerr',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'DEAR SANTA',
      author: 'Debbie Macomber',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'APPLES NEVER FALL',
      author: 'Liane Moriarty',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'OH WILLIAM!',
      author: 'Elizabeth Strout',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'THE LAST THING HE TOLD ME',
      author: 'Laura Dave',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'SILVERVIEW',
      author: 'John Le Carré',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'BILLY SUMMERS',
      author: 'Stephen King',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'THE MIDNIGHT LIBRARY',
      author: 'Matt Haig',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'CROSSROADS',
      author: 'Jonathan Franzen',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'HARLEM SHUFFLE',
      author: 'Colson Whitehead',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
    { 
      title: 'THE BUTLER',
      author: 'Danielle Steel',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },
]
const seedbooks = () => Gallery.bulkCreate(bookdata);

module.exports = seedbooks;