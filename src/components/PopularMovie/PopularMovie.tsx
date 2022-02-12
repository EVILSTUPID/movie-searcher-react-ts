import {useDispatch, useSelector} from "react-redux";
import {movieDataSelect} from "../../redux/selectors";
import {setPage} from "../../redux/reducers";
import {Page, Poster, PosterImage, PosterList, PosterName, StyledLink} from "./PopularMovie.styled";
import {nanoid} from "@reduxjs/toolkit";


export const PopularMovie = () => {
    const dispatch = useDispatch()
    const movie = useSelector(movieDataSelect)
    console.log(movie)
    const movieListPages = [
        {
            pages: movie?.page,
        },
        {
            pages: movie?.page + 1,
        },
        {
            pages: movie?.page + 2,
        }
    ]
    if (movie?.page > 2) {
        movieListPages.unshift({pages: movie.page - 2})
    }
    if (movie?.page > 1) {
        movieListPages.unshift( {pages: movie.page - 1})
        movieListPages.sort((prev, next) => prev.pages - next.pages);
    }
    const nextPage = () => {
        dispatch(setPage(movie.page + 1))
    }
    const backPage = () => {
        if (movie.page > 1){
            dispatch(setPage(movie.page - 1))
        }
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            <PosterList>
                {movie &&
                    movie.results.slice(0, 18).map((moviePost) => {
                        return (
                            <Poster key={nanoid()}>
                                <StyledLink to='/info'>
                                <PosterImage
                                    src={`https://image.tmdb.org/t/p/original${moviePost.poster_path}?api_key=${process.env.REACT_APP_MY_APP_KEY}`}
                                    alt=''/>
                                <PosterName>
                                    {moviePost.title}
                                </PosterName>
                                </StyledLink>
                            </Poster>
                        )
                    })
                }
            </PosterList>
            <Page>
                <button onClick={() => {
                    backPage()
                    scrollUp()
                }}>back</button>
                {movieListPages &&
                    movieListPages.map((readyPages) => {
                        if (isNaN(readyPages.pages)) {
                            readyPages.pages = undefined
                        }
                        return (
                            <div onClick={() => {
                                dispatch(setPage(readyPages.pages))
                                scrollUp()
                            }} key={nanoid()}>
                                {readyPages.pages}
                            </div>
                        )
                    })}
                <button onClick={() => {
                    nextPage()
                    scrollUp()
                }}>next</button>
            </Page>
        </div>
    );
};

