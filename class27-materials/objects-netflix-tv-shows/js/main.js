//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows {
    constructor(title, genre, rating, numOfEpisodes) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.numOfEpisodes = numOfEpisodes;
    }

    play() {
        console.log('Playing....')
    }
    pause() {
        console.log('Pause')
    }
    skipIntro() {
        console.log('Skipped Intro...')
    }
}

let bridgerton = new NetflixShows('Bridgerton', 'Period Romantic Drama', '99%', 16)
