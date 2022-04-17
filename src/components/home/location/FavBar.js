import { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { IconButton } from "../../styled-components/IconButton.styled";


export const FavBar = () => {
    const [isSaved, setSaved] = useState(false);

    const saveButton = () => {
        return isSaved ? <MdOutlineFavorite/> : <MdOutlineFavoriteBorder/>; 
    }

    return (
        <>
            <span>Save to favorites </span> <IconButton onClick={()=>{setSaved(isSaved => !isSaved)}} >{saveButton()} </IconButton>
        </>
    );
} 