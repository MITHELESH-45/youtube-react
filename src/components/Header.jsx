import React, { useEffect, useState } from 'react'
import menu from '../utils/images/hamburger_icon.svg.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../utils/store/appSlice';
import { youtube_search_api } from '../utils/constants';
import { cacheResults } from '../utils/store/searchSlice';
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const [search,setSerach]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const navigate=useNavigate();
  
  const searchCache=useSelector(store=>store.search);
  const dispatch=useDispatch();
  const handleSideBar=()=>{
     dispatch(toggleSideBar());
  }
  
  const getSearchSuggestons=async(normalized)=>{

    const data=await fetch(youtube_search_api+normalized);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [normalized]:json[1],
    }))

  } 

useEffect(() => {
  const normalized = search.trim().toLowerCase();

  if (!normalized) {
    setSuggestions([]);
    return;
  }

  const timer = setTimeout(() => {
    if (searchCache[normalized]) {
      setSuggestions(searchCache[normalized]);
    } else {
      getSearchSuggestons(normalized);
    }
  }, 200);

  return () => clearTimeout(timer);
}, [search]);


  return (
    <div className='p-4  grid grid-cols-12 shadow-lg'>

        <div className='flex col-span-2  items-center'>
            <img
            onClick={handleSideBar}
            className='h-9 cursor-pointer '
             alt='menu'
             src={menu}/>

            <img
            onClick={()=>navigate("/")}
            className='h-10 mx-2'
            alt='logo'
            src='https://imgs.search.brave.com/O021aWB6pWnHLM_a-PdtBiPttnBQJnDDZXaaWYeEH50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2E2/L2I5LzYwYTZiOTY0/ZWMzZWJhOGRmNjc5/MDBkMTNjODkyNDk2/LmpwZw'
            />
        </div>

        <div className='col-span-8 flex items-center justify-center'>
          <div className='relative'>
          <div >
             <input 
              className='border border-black p-2 w-140 rounded-l-full'
              placeholder='Search'
              value={search}
              onChange={(e)=>setSerach(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}  
              
              />

             <button
              onClick={() => {
                if (!search.trim()) return;
                navigate("/search?q=" + search);
                setShowSuggestions(false);
              }}
              className='rounded-r-full bg-gray-200 px-2 py-2 border border-black '
              >search</button>

           </div>
           {showSuggestions && suggestions.length>0 &&(
           <div className='absolute bg-white px-2 py-2  w-[35rem] border border-gray-300 shadow-lg rounded-lg'>
             <ul>
               {
                
          
                  suggestions.map((s)=>
                  <li key={s} 
                  onMouseDown={() => {
                    setSerach(s);
                    navigate("/search?q=" + s);
                    setShowSuggestions(false);
                  }
                  }
                  className='py-2 p-1 shadow-b-sm hover:bg-gray-100'>{s}</li>)
                
                } 
                
                
             </ul>
           </div>
           )}

        </div>
        </div>

        <div className='col-span-2 flex justify-end'>
            <img 
            className='h-10'
            alt='avatar'
            src='https://imgs.search.brave.com/fjCvMiXzsumVEtBZ4JBfabm1E4nLGayIbsSZlQ9BxJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/Mzk1ODI1MC92ZWN0/b3IvdXNlci1hdmF0/YXItcHJvZmlsZS1p/Y29uLWJsYWNrLXZl/Y3Rvci1pbGx1c3Ry/YXRpb24tb24tdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC13ZWJz/aXRlLW9yLWFwcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/b0dHeXhYYzFqYVJB/b3BjczRaRWtaMUxi/dEFvUXdLcDRRMG5p/THZKTmstbz0'
            />
        </div>
    </div>
  )
}

export default Header
