### Deployed on netlify: https://hungry-murdock-35d2ff.netlify.app/

## Getting Started

- Clone the next-movies repo.
- Run `npm install` to install the dependencies.
- Create `.env.local` file and paste the contents of `.env.example` file.
- Generate API key by following the instructions here: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
- Add generated API key from the step above in the `.env.local` file as `API_KEY`.
- Run `npm run dev` or `yarn dev` to run the development server.

Open [http://localhost:3000](http://localhost:3000) within your browser.

## Preview

##### homepage slider

![Homepage Slider](https://i.imgur.com/rYVZOn8.gif)

##### movie details page (movie details)

![Theme Editor](https://i.imgur.com/hXYcvI9.png)

##### movie details page (movie cast)

![Theme Editor](https://i.imgur.com/MhmrLOS.png)

##### tv show details page (tv show details)

![Theme Editor](https://i.imgur.com/cndsOlM.png)

##### tv show details page (tv show seasons)

![Theme Editor](https://i.imgur.com/dZLJdhL.png)

##### trending actors

![Theme Editor](https://i.imgur.com/74K3pHm.png)

##### actor details page

![Theme Editor](https://i.imgur.com/6oeyiCW.png)

##### theme editor

![Theme Editor](https://i.imgur.com/kTmLds9.gif)

## Details

`paths`

###### Movies

_/_ - homepage displays current trending movies

_/movies/[genreID]_ - page that displays movies based on the given genre

_/movie/[movieID]_ - page that displays details about movie, including popular cast

###### TV Shows

_/tv_ - page that displays current trending TV Shows

_/tvshows/[genreID]_ - page that displays TV Shows based on the given genre

_/tv/[tvShowID]_ - page that displays details about TV Show, including popular cast and seasons.

###### Actors

_/actors_ - page that displays current trending actors

_/actor/[actorID]_ - page that displays information about actor and what they are known for

More details - TBA
