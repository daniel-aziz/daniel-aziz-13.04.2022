import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../../styled-components/IconButton.styled";
import { removeFromFavorites, addToFavorites } from "../../../redux/favoritesReducer"
import { containsCityByKey } from "../../../utils/helper"
import { useState } from "react";


export const CurrentFavBar = () => {
  const currentCity = useSelector(state => state.city.value);
  const currFavorites = useSelector(state => state.favorites.value)
  const dispach = useDispatch();
  


  if (currentCity.key === "") {
    return (
      <>
      </>
    );
  }

  
  if (containsCityByKey(currentCity.key, currFavorites)) {
    return (
      <IconButton onClick={() => { dispach(removeFromFavorites(currentCity)) }} >  <MdOutlineFavorite /> </IconButton>
    );
  }

  else {
    return (
      <IconButton onClick={() => { dispach(addToFavorites(currentCity)) }} > <MdOutlineFavoriteBorder /> </IconButton>

    )
  }
} 