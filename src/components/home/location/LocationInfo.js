import { useDispatch } from "react-redux";
import { Container } from "../../styled-components/Container.styled";
import { getCity } from "../../../redux/cityReducer";


export const LocationInfo = () => {
    const dispach = useDispatch()

    return (
        <Container>
        <button onClick={()=>{dispach(getCity())}}>get info</button>
        </Container>
    );
} 