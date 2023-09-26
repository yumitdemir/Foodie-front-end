import React from 'react';

function ImageCollage(props) {
    return (
        <div className={"grid grid-cols-3  sm:grid-cols-5  gap-6 mt-20 place-items-center place-content-center"}>

            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg" className={" rounded-xl shadow-black shadow-lg"} alt=""/>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" className={" rounded-xl row-span-2 shadow-lg shadow-black"} alt=""/>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg" className={"  rounded-xl shadow-lg  shadow-black row-span-2"} alt=""/>

            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg" className={"rounded-xl shadow-lg shadow-black"} alt=""/>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/boiled-eggs-on-a-plate.jpg" className={"rounded-xl shadow-lg shadow-black"} alt=""/>
            <img src="https://media.istockphoto.com/id/1204371265/photo/flat-lay-of-turkish-traditional-foods-for-celebrating-holiday-wode-composition.jpg?s=1024x1024&w=is&k=20&c=Izh3hYKEq7oqU7S4DFw4BsMa7k5LIlK5MwKNL6tPo0g=" className={" w-[600px] h-[200px] rounded-xl col-span-2 shadow-lg shadow-black"} alt=""/>
        </div>
    );
}

export default ImageCollage;