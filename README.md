## Getting Started

* Clone the next-movies repo.
* Run ```npm install``` to install the dependencies.
* Create ```.env.local``` file and paste the contents of ```.env.example``` file.
* Generate API key by following the instructions here: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
* Add generated API key from the step above in the ```.env.local``` file as ```API_KEY```.
* Run ```npm run dev``` or ```yarn dev``` to run the development server.

Open [http://localhost:3000](http://localhost:3000) within your browser.


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