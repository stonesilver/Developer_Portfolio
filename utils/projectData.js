import Img1 from '../public/images/movieDataBase.png';
import Img2 from '../public/images/commitViewer.png';
import Img3 from '../public/images/portfolio.png';
import Img4 from '../public/images/coronation.png';

export const projects = [
  {
    id: 1,
    name: 'Movie Database',
    image: Img1,
    description:
      'This project is a fully responsive web application. This project uses TheMovieDB API to display movies/Tv series by genre, popular, upcoming, best rated etc. Users can also serach for movie, TV series or actors/actresses. It was built using React, SASS, bootstrap and redux.',
    live_link: 'https://moviedatabase12.netlify.app/',
    github_link: 'https://github.com/stonesilver/Movie-Database',
  },
  {
    id: 2,
    name: 'Commit Viewer',
    image: Img2,
    description:
      'Explore open source projects from GitHub, and read their commit history to see the story of how they were built. This project uses github API to display commits on a repository. It was built using React, SASS and  axios for API calls.',
    live_link: 'https://commitviewer12.netlify.app/',
    github_link: 'https://github.com/stonesilver/Bossbus-commit-viewer',
  },
  {
    id: 3,
    name: 'Portfolio',
    image: Img3,
    description:
      'This project is a fully responsive web application. This project uses TheMovieDB API to display movies/Tv series by genre, popular, upcoming, best rated etc. Users can also serach for movie, TV series or actors/actresses. It was built using React, SASS, bootstrap and redux.',
    live_link: 'https://chigozie-ezenwa.vercel.app/',
    github_link: 'https://github.com/stonesilver/developer_portfolio',
  },
  {
    id: 4,
    name: 'Coronation',
    image: Img4,
    description:
      'A clone of Anka website with a little tweak to the original design. It was built using React, Redux, SASS and Rtk Query for API calls.',
    live_link: '',
    github_link: 'https://github.com/stonesilver/Royal-Prints',
  },
];
