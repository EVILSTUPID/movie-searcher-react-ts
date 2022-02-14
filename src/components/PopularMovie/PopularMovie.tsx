import {useDispatch, useSelector} from "react-redux";
import {movieDataSelect} from "../../redux/selectors";
import {setPage, setSelectedMovieId} from "../../redux/reducers";
import {Page, Poster, PosterImage, PosterList, PosterName, StyledLink} from "./PopularMovie.styled";
import {nanoid} from "@reduxjs/toolkit";
import {API_IMAGE_URL, API_KEY} from "../../tools/api";


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
                                <StyledLink onClick={() => dispatch(setSelectedMovieId(moviePost.id))}  to='/info'>
                                <PosterImage
                                    src={`${API_IMAGE_URL}${moviePost.poster_path}?api_key=${API_KEY}`}
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

