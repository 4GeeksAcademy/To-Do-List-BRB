import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[input, setInput] = useState([""]);
	const[chores, setChores] = useState(["Wash the car ", "Walk the dog ", "Clean the apartment", "go to kitchen"]);
	
	return (
		<div className ="container-fluid m-5 text-center"> 
			<div>
				<input onChange={(e)=> setInput(e.target.value)} type ='text'/>
			
				<button onClick = {setInput} type="button" >
					Add!
				</button>
			</div>
			<div className="p-4">
					{	
					// condition here to say that if input length is greater than 0, we must create a line item to submit into
						chores.map((item)=> {
							return(
									<div className="w-50  mx-auto">
										<ul className="list-group">
											<li className="list-group-item">{item}</li>
										</ul>
									</div>
							)
						})
					}


			</div>
		</div>

	
	)
};


<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

// setchores function for input to pass through,
//  add button to grab input from the onchange function// 
// can also look into "on keydown to detect enter button push
export default Home;