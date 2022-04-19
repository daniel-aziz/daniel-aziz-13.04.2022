import { ForcastCard } from "./ForcastCard";


export const CurrentForcast = ({ forcast }) => {
    return (
        <>
            {forcast.map((item, index) => <ForcastCard key={index} item={item} />)}
        </>
    );
} 