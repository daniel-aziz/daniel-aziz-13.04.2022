import { useSelector } from "react-redux";
import { ForcastCard } from "./ForcastCard";


export const CurrentForcast = () => {
    const currentCity = useSelector(state => state.city.value);
    
    return (
        <>
            {currentCity.forcast.map((item, index) => <ForcastCard key={index} item={item} />)}
        </>
    );
} 