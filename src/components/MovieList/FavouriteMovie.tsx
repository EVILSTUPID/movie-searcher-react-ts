import {useDispatch, useSelector} from "react-redux";
import {selectedFavouritesMovie} from "../../redux/selectors";
import {UpComingMovies} from "../UpComingMovies/UpComingMovies";
import {
    Favourites,
    FavouritesInImage,
    FavouritesTitle,
    Poster,
    PosterImage, PosterList,
    PosterName,
    StyledLink
} from "./PopularMovie.styled";
import {nanoid} from "@reduxjs/toolkit";
import {
    delFavouritesMovie,
    addFavouritesMovie,
    setPage,
    setSelectedMovieId,
    setFavouritesMovie
} from "../../redux/reducers";
import {scrollUp} from "../../redux/tools/scrollUp";
import {API_IMAGE_URL, API_KEY} from "../../redux/tools/api";
import * as React from "react";
import {useEffect} from "react";

export const FavouriteMovie = (): JSX.Element => {
    const favourite = useSelector(selectedFavouritesMovie)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPage(1))
    }, [])
    useEffect(() => {
        const favouritesMovie = JSON.parse(localStorage.getItem('movie-app-ts'))
        dispatch(setFavouritesMovie(favouritesMovie))

    },[])

    return (
        <div >
            <UpComingMovies/>
            <FavouritesTitle>Избранное:</FavouritesTitle>
            <PosterList>
                {favourite &&
                    favourite.map((favouriteMovie) => {
                        const isFavourite = favourite.findIndex((movie) => movie.id === favouriteMovie.id) !== -1
                        return (
                            <Poster key={nanoid()}>
                                <FavouritesInImage>

                                    <Favourites
                                        style={isFavourite ? { color: 'red' } : {}}
                                        onClick={() => {
                                            if (isFavourite) {
                                                dispatch(delFavouritesMovie(favouriteMovie))
                                            } else {
                                                dispatch(addFavouritesMovie(favouriteMovie))
                                            }
                                        }}
                                    />
                                    <StyledLink onClick={() => {
                                        dispatch(setSelectedMovieId(favouriteMovie.id))
                                        scrollUp()
                                    }} to='/info'>
                                        <PosterImage
                                            src={`${API_IMAGE_URL}${favouriteMovie.poster_path}?api_key=${API_KEY}`}
                                            alt=''/>

                                    </StyledLink></FavouritesInImage>
                                <StyledLink onClick={() => dispatch(setSelectedMovieId(favouriteMovie.id))} to='/info'>
                                    <PosterName>
                                        {favouriteMovie.title}
                                    </PosterName></StyledLink>
                            </Poster>
                        )
                    })
                }
            </PosterList>
        </div>
    )
}