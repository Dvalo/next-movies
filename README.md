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
![Homepage Slider](https://i.imgur.com/lW6oPuZ.gif)

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
*/* - homepage displays current trending movies *(dummy data currently)*

*/movies/[genreID]* - page that displays movies based on the given genre *(dummy data currently)*

*/movie/[movieID]* - page that displays details about movie, including popular cast *(real data)*

###### TV Shows
*/tv* - page that displays current trending TV Shows *(dummy data currently)*

*/tvshows/[genreID]* - page that displays TV Shows based on the given genre *(dummy data currently)*

*/tv/[tvShowID]* - TBA

###### Actors
*/actors* - page that displays current trending actors *(real data)*

*/actor/[actorID]* - page that displays information about actor and what they are known for *(real data)*

More details - TBA