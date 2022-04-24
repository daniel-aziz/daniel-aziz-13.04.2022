import { FavoriteCard } from "./FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFavoritesState } from "../../redux/favoritesReducer";
import { CardContainer } from "../styled-components/CardContainer.styled";
import { HomeStyled } from "../styled-components/Home.styled";


export const Favorites = () => {
    const currFavorites = useSelector(state => state.favorites.value)
    const dispach = useDispatch();

    useEffect(() => {
        dispach(setFavoritesState());
    }, [dispach])


    return (
        <HomeStyled>
            <CardContainer>
                {currFavorites?.map((item, index) => <FavoriteCard key={index} item={item} />)}
            </CardContainer>
        </HomeStyled>
    );
} 