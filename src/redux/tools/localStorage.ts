export const saveToLocalStorage = (movie) => {
  localStorage.setItem('movie-app-ts', JSON.stringify(movie))
}
