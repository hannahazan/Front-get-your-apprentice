import './snapWart.css'
import { useState,useEffect } from 'react';
//import drop from './assets/caret-down-solid.svg'
//import axios from 'axios';

const SnapWart=()=>{
   // const [students, setStudents] = useState(null);
    const [potterData,setPotterData]=useState(null)
    const [pageNumber,setPageNumber]=useState(null)
    /*const [prev,setPrev]=useState(null)
    const [hideDrop,setHideDrop]=useState(false)
    const [filterHouse,setFilterHouse]=useState(null)*/
  
    const fetchTest=async ()=>{
      const response=await fetch('http://localhost:3000/real/students')
      const dataPotter=await response.json()
      console.log(setPotterData(dataPotter))
      setPageNumber(dataPotter.meta.pagination.next)
      
    }

    useEffect(()=>{
        console.log(pageNumber)
        console.log(potterData)
    })

    return(
        <div className='Snap'>
            <header className='HeaderSnap'>
                <div className='filtreSnapHeader'>
                    <nav className='NavSnap'>
                        <p className='pN'>House</p>
                        <p className='pN'>SnapDB</p>
                        <p className='pN'>SnapStore</p>
                        <button onClick={()=>{fetchTest()}}>test appel serveur</button>
                    </nav>
                    <p className='SnapWartsTitle'>Snapwarts</p>
                </div>
            </header>
        </div>
    )
}

export default SnapWart