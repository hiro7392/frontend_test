import StarBorderIcon from '@mui/icons-material/StarBorder';

type StarRatingOrganismProps = {
    totalStars?: number;
  };
export const StarRatingOrganism:React.FC<StarRatingOrganismProps>=({totalStars=5})=>{

    return (
    <div>
        {[...Array(totalStars)].map((_,i)=>(
            <StarBorderIcon key={i}/>
        ))}
    </div>);
};