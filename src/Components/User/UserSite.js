import React, { useEffect, useState } from 'react'
import Base from '../Base'
import { useSelector   } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveData } from '../../reducers/options';
import { saveSelectedData } from '../../reducers/options';
import { useNavigate } from 'react-router-dom';
function UserSite() {
  const dispatch = useDispatch();

  useEffect(()=>{
async function getData(){
  const res = await fetch(`https://madhan235-pizza-node.onrender.com/user/options`,
{method:"get",
// headers:{"auth-token": localStorage.getItem("token")}
})
 const result = await res.json();
  dispatch(saveData(result.pizzaData))
}
getData();

  },[])

     

  const selectData = useSelector((state)=>state.options.data)
console.log(selectData.crustData?.map((d,i)=>(d.name)));

  const [selectedCrust, setSelectedCrust] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedVeggies, setSelectedVeggies] = useState("");
  const [selectedMeat,setSelectedMeat] = useState(); 
   
  const navigate = useNavigate();
    
 
  return (
    <Base
    title={"Coustomize your pizza !!"}
    >
    <div className='container card'>

    <div>
      <h2 style={{color:"red"}}>Select a Crust:</h2>
      <select value={selectedCrust} onChange={(e)=>setSelectedCrust(e.target.value)}>
        <option value={""}>Select an option</option>
        {selectData?.crustData?.map((d,i) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
          
        ))}
      </select>
      <br />
    {selectedCrust && <p style={{color:"red"}}><b>You selected: {selectedCrust}</b></p>}
    </div>

    <div>
      <h2 style={{color:"red"}}>Select a Sauce:</h2>
      <select value={selectedSauce} onChange={(e)=>setSelectedSauce(e.target.value)}>
        <option value={""}>Select an option</option>
        {selectData?.sauceData?.map((d,i) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
          
        ))}
      </select>
      <br />
    {selectedSauce && <p style={{color:"red"}}><b>You selected: {selectedSauce}</b></p>}
    </div>

    <div>
      <h2 style={{color:"red"}}>Select a Chesse:</h2>
      <select value={selectedCheese} onChange={(e)=>setSelectedCheese(e.target.value)}>
        <option value={""}>Select an option</option>
        {selectData?.cheeseData?.map((d,i) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
          
        ))}
      </select>
      <br />
    {selectedCheese && <p style={{color:"red"}}><b>You selected: {selectedCheese}</b></p>}
    </div>

    <div>
      <h2 style={{color:"red"}}>Select Veggies:</h2>
      <select value={selectedVeggies} onChange={(e)=>setSelectedVeggies(e.target.value)}>
        <option value={""}>Select an option</option>
        {selectData?.veggiesData?.map((d,i) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
          
        ))}
      </select>
      <br />
    {selectedVeggies && <p style={{color:"red"}}><b>You selected: {selectedVeggies}</b></p>}
    </div>

    <div>
      <h2 style={{color:"red"}}>Select a Meat:</h2>
      <select value={selectedMeat} onChange={(e)=>setSelectedMeat(e.target.value)}>
        <option value={""}>Select an option</option>
        {selectData?.meatData?.map((d,i) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
          
        ))}
      </select>
      <br />
    {selectedMeat && <p style={{color:"red"}}><b>You selected: {selectedMeat}</b></p>}
    </div>
<button className='btn btn-danger submitbtn'
onClick={()=>{dispatch(saveSelectedData(
  {selectedCheese,selectedCrust,selectedMeat,selectedSauce,selectedVeggies})
)
navigate("/userbill")}
}>Confirm</button>

        </div>
     
    </Base>
  )
}

export default UserSite