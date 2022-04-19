import { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { Container } from "../../styled-components/Container.styled";
import { IconButton } from "../../styled-components/IconButton.styled";


export const CurrentFavBar = () => {
    const [isSaved, setSaved] = useState(false);

    const saveButton = () => {
        return isSaved ? <MdOutlineFavorite/> : <MdOutlineFavoriteBorder/>; 
    }

    return (
        <Container>
            <span>Save to favorites </span> <IconButton onClick={()=>{setSaved(isSaved => !isSaved)}} >{saveButton()} </IconButton>
        </Container>
    );
} 