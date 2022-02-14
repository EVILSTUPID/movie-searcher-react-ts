import {useSelector} from "react-redux";
import {selectedMovieSelect} from "../../redux/selectors";
import {API_IMAGE_URL, API_KEY} from "../../tools/api";
import {
    MovieCompanyBlock,
    MovieInfoName, MovieMiniInfoBlocks,
    PosterImage,
    StyledMovieInfo,
    StyledMovieInfoBlock,
    StyledMovieInfoOverwied,
    StyledMovieSelectedGenres
} from "./SelectedMovieInfo.styled";
import {nanoid} from "@reduxjs/toolkit";

export const SelectedMovieInfo = (): JSX.Element => {
    const selectedMovie = useSelector(selectedMovieSelect)
    return (

<div>{selectedMovie && (
    <div>
        <StyledMovieInfo>
        <PosterImage
            src={`${API_IMAGE_URL}${selectedMovie.poster_path}?api_key=${API_KEY}`}
        alt=''/>
            <StyledMovieInfoBlock>
            <MovieInfoName>
            {selectedMovie.title}
            </MovieInfoName>
                <StyledMovieSelectedGenres>
                    <div>Жанры:</div>
                    {selectedMovie.genres.map((genres) => {
                        return (
                            <div key={nanoid()}>&nbsp;{genres.name},</div>
                        )
                    })}
                </StyledMovieSelectedGenres>
            <StyledMovieInfoOverwied>
            {selectedMovie.overview}
                <MovieMiniInfoBlocks>Бюджет: {selectedMovie.budget}</MovieMiniInfoBlocks>
                <MovieMiniInfoBlocks>Средняя оценка: {selectedMovie.vote_average}</MovieMiniInfoBlocks>
                <MovieMiniInfoBlocks>
                <MovieCompanyBlock>Компании: {selectedMovie.production_companies.map((companies) => {
                    return (
                        <div key={nanoid()}>
                            <div>&nbsp;{companies.name},</div>
                        </div>
                    )
                })}</MovieCompanyBlock></MovieMiniInfoBlocks>

            </StyledMovieInfoOverwied>
            </StyledMovieInfoBlock>

        </StyledMovieInfo>

    </div>)}
</div>
    )
}