import CardCon from './CardCon'

import { useEffect, useState } from 'react';

import ShimmerUi from './ShimmerUi'

const Body = () =>{
    const[restaurant ,setRestaurant] =useState([]);
    const[filterrestaranent,setfilterrestaranent] =useState([]);
    const[searchtext ,setSearchtext] = useState("");
    console.log("header callded");

    

    useEffect(()=>{
        fetchdata();
    },[]);


   

    const fetchdata= async ()=>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4176244&lng=78.4626462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          //console.log(json);
          //console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilterrestaranent(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  //  if(restaurant.length == 0){
   //     return <ShimmerUi/>
   //  }
    return restaurant.length == 0 ? <ShimmerUi/> :(
        <div className="body">
            <div className="searchdiv">
                
                    <input className="search" type="search" value={searchtext}
                    onChange={(e)=>{
                        setSearchtext(e.target.value);

                        
                    }}
                
                
                    /> 
                    <button  className='searchbutton' onClick={()=>{
                        console.log(searchtext);
                       
                       const filterlist1 = restaurant.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                    
                           console.log(filterlist1);
                           setfilterrestaranent(filterlist1);
                        


                    }} >search</button>
                    <button className='rating-btn' 
                    onClick={()=>{
                        const filterlist = restaurant.filter(
                            (res)=> res.info.avgRating >4
                        )
                        console.log("data updaated");
                        setRestaurant(filterlist)
                    }}>  top of restarent</button>
                
            </div>
            <div className="restarent">
                {
                    filterrestaranent.map((restranent)=>(
                       <CardCon key={restranent.info.id} rest={restranent}/>
                    ))
                }
              
              
               
               
            </div>

        </div>
    );

};

export default Body;