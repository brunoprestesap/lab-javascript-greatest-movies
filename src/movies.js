// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((theDirector) => {
    return theDirector.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const movies = moviesArray.filter(function (movie) {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });

  if (movies.length === 0) {
    return 0;
  } else {
    return movies.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const pontuacao = moviesArray.reduce(function (acc, ponto) {
    if (ponto.score) {
      return acc + ponto.score;
    } else {
      return acc;
    }
  }, 0);

  const mediaScore = pontuacao / moviesArray.length;

  return parseFloat(mediaScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const isDrama = moviesArray.filter(function (el) {
    return el.genre.includes("Drama");
  });

  if (isDrama.length === 0) {
    return 0;
  }

  const pontuacao = isDrama.reduce(function (acc, ponto) {
    if (ponto.score) {
      return acc + ponto.score;
    } else {
      return acc;
    }
  }, 0);

  const mediaScore = pontuacao / isDrama.length;

  return parseFloat(mediaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const n = [...moviesArray];

  n.sort((firstMovie, secondMovie) => {
    const firstMovieYearOfRelease = firstMovie.year;
    const secondMovieYearOfRelease = secondMovie.year;

    if (firstMovieYearOfRelease > secondMovieYearOfRelease) {
      return 1;
    } else if (firstMovieYearOfRelease < secondMovieYearOfRelease) {
      return -1;
    } else if (
      firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()
    ) {
      return 1;
    } else {
      return -1;
    }
  });

  return n;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const n = [...moviesArray];

  n.sort((firstMovie, secondMovie) => {
    if (firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });

  const newArray = n.map((element) => {
    return element.title;
  })

  return newArray.slice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

if (typeof module !== "undefined") {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
