import React,{useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import HomeShimmer from './HomeShimmer';

const Body = () => {

  const  [listofrestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log('useEffect called');
    fetchdata();
  }, []);
  
  const fetchdata = async () => {
    const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listofrestaurants.length===0 ?(
    <HomeShimmer/>
  ) :(
    <>
      <div className='body'>
        <div className="my-8 mx-10">
          <h1 className=' text-xl font-extrabold'>Filters</h1>
          <button type='submit' className="inline-block px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
          onClick={()=> {
            console.log('butn click');
            const topratedlist = listofrestaurants.filter(
              (rest) => rest.info.avgRating > 4
            );
            setListOfRestaurants(topratedlist)
            console.log(topratedlist);
          }}>Top Rated </button>
        </div>
        {/* res-container */}
        <h1 className='mx-10 text-xl font-extrabold'>Best Restaurants In Banglore</h1>
       
        <div className="my-8 mx-10 grid grid-cols-1 gap-2 md:grid-cols-3">
          {listofrestaurants.map((restaurant) => (  
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Body