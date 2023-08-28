import {CDN_URL} from '../utils/constans'

const CardCon =(props) =>{
    const {rest} = props;
    const {name,costForTwo,cuisines ,avgRating

    } =rest.info ;
    //console.log(rest.info.name)
    return(
         <div className="cardcontainer">
    
              <img className='food' src={CDN_URL+rest.info.cloudinaryImageId} alt="foodimage"/>
              <h2>{name}</h2>
              <h2>rating:{avgRating}</h2>
              <h3>{costForTwo}</h3>
              <h3>{cuisines.join(",")}</h3>
              </div>
              
         
    );
};

export default CardCon;