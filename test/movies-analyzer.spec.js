import MoviesAnalyzer from "../src/index";
const { movies, users } = require('./data.json');
const testcases = require('./testcases.json');

describe('MoviesAnalyzer', () => {

  describe('topWatchlistedMoviesAmongFriends', () => {

    const analyzer = new MoviesAnalyzer(movies, users);
    testcases.forEach(({ userId, expected }) => {
      it(`should return top watchlisted movies among friends for user ${userId}`, () => {
        const actual = analyzer.topWatchlistedMoviesAmongFriends(userId);
        expect(actual).toEqual(expected);
      });
    });
  });
});
