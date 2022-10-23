export default class MoviesAnalyzer {
    constructor(movies, users) {
        this.movies = movies;
        this.users = users;
    }

    topWatchlistedMoviesAmongFriends(userId) {
        // TODO: Implement

        const providedUserInfo = this.users.find(({ userId: idOfUser }) => userId === idOfUser);

        const { friends: providedUserFriendsList } = providedUserInfo;
        let moviesAndWatchListCount = {};

        this.movies.forEach((movie) => {
            const { title, watchlist } = movie;
            let watchListCount = 0;

            watchlist.forEach((watchListUserId) => {
                if (providedUserFriendsList?.includes(watchListUserId)) {
                    if (moviesAndWatchListCount[title]) {
                        moviesAndWatchListCount[title] = {
                            title,
                            watchListCount: watchListCount += 1
                        }
                    } else {
                        moviesAndWatchListCount[title] = {
                            title,
                            watchListCount: watchListCount += 1
                        }
                    }
                }
            });
        });

        return Object.values(moviesAndWatchListCount)
                .sort((firstMovie, secondMovie) => secondMovie.watchListCount - firstMovie.watchListCount)
                .slice(0, 4)
                .sort((firstMovie, secondMovie) => {
                    if (firstMovie.watchListCount === secondMovie.watchListCount) {
                        return firstMovie.title.localeCompare(secondMovie.title);
                    }
                })
                .map(({ title }) => title);
    }
}