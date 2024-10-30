import { useEffect, useState } from "react"
import { toyService } from "../services/toy.service.js"
import { useSelector } from "react-redux"


export function ToyIndex(){
    
    const toys=useSelector(storeState=>storeState.toys)

    useEffect(()=>{
        toyService.query()
        .catch(err=>{
            console.log('err', err)
        })
    },[])


    return(
        <div>
            <h2>Im Toy Index</h2>
        </div>
    )

}