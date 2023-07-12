import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import SecondsCounter from "./SecondsCounter";
import Clock from "./Clock";

//create your first component
const Home = () => {

	let decimalSystem= [
		{
			description: "unidades",
			secondsFrequency: 1 
		},
		{
			description: "decenas",
			secondsFrequency: 10 
		},
		{
			description: "centenas",
			secondsFrequency: 100 
		},
		{
			description: "unidades de millar",
			secondsFrequency: 1000 
		},
		{
			description: "decenas de millar",
			secondsFrequency: 10000 
		},
		{
			description: "centenas de millar",
			secondsFrequency: 100000 
		},
	];

	decimalSystem = decimalSystem.reverse();

	return (
		<div  className='container-fluid text-white counter-container'>
			<Clock/>
			
			{
				decimalSystem.map((value,index)=>{
					return <SecondsCounter secondsFrequency={value.secondsFrequency} key={index}/>
				})
			}
			
			

		</div>
	);
};

export default Home;
