import { Container } from "../styled-components/Container.styled";
import { FavoriteCard } from "./FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFavoritesState } from "../../redux/favoritesReducer";


export const Favorites = () => {
  const currFavorites = useSelector(state => state.favorites.value)
  const dispach = useDispatch();

    useEffect(()=>{
        dispach(setFavoritesState());

    },[dispach])

    const getFav= () => {
        console.log(currFavorites)
        return (
            <>
            {currFavorites?.map((item, index)=>
                <FavoriteCard key={index} item={item}/>
            )}
            </>
        )
    }

    return (
        <Container>
             {getFav()}
        </Container>
    );
} 