## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Preview

##### homepage slider
![Homepage Slider](https://i.imgur.com/rYVZOn8.gif)

##### movie details page (movie details)
![Theme Editor](https://i.imgur.com/hXYcvI9.png)

##### movie details page (movie cast)
![Theme Editor](https://i.imgur.com/MhmrLOS.png)

##### trending actors
![Theme Editor](https://i.imgur.com/74K3pHm.png)

##### actor details page
![Theme Editor](https://i.imgur.com/6oeyiCW.png)

##### theme editor
![Theme Editor](https://i.imgur.com/kTmLds9.gif)


## Details

`paths`
###### Movies
*/* - homepage displays current trending movies

*/movies/[genreID]* - page that displays movies based on the given genre

*/movie/[movieID]* - page that displays details about movie, including popular cast

###### TV Shows
*/tv* - page that displays current trending TV Shows

*/tvshows/[genreID]* - page that displays TV Shows based on the given genre

*/tv/[tvShowID]* - TBA

###### Actors
*/actors* - page that displays current trending actors

*/actor/[actorID]* - page that displays information about actor and what they are known for

More details - TBA