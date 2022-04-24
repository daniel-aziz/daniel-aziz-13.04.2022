
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { IconButton } from "../styled-components/IconButton.styled";
import { removeFromFavorites, addToFavorites } from "../../redux/favoritesReducer"
import { containsCityByKey } from "../../utils/helper"
import { useDispatch, useSelector } from "react-redux";
import notify from "../../utils/Notify";


export const CurrentWeather = () => {
    const currentCity = useSelector(state => state.city.value);
    const currentPreferences = useSelector(state => state.preferences.value);
    const currFavorites = useSelector(state => state.favorites.value);

    const dispach = useDispatch();

    const returnFavButton = () => {
        if (currentCity.key === "") return (<></>);

        if (containsCityByKey(currentCity.key, currFavorites)) {
            return (
                <IconButton color="red" onClick={() => { 
                    notify.success("Removed from favorites")
                    dispach(removeFromFavorites(currentCity))
                 }} >  <MdOutlineFavorite /> </IconButton>
            );
        }

        return (
            <IconButton color="red" onClick={() => { 
                notify.success("Added to favorites")
                dispach(addToFavorites(currentCity)) 
            }} > <MdOutlineFavoriteBorder /> </IconButton>
        );
    }



    return (
        <section>
            <div>
                <h2> {currentCity.name}   {returnFavButton()} </h2>
            </div>
            <div>
                <h3>{currentCity.description}</h3>
                <p> {currentPreferences.metric ? currentCity.metric : currentCity.imperial}  &#176;</p>
            </div>
        </section>
    );
} 