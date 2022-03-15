import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../component/HomePage'
import Grid from '../component/Grid'
import Instruction from '../component/Instruction'


class Router extends React.Component{
    constructor(){
        super()
    }


    render(){
        return (<div>
                <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Grid" element={<Grid/>}/>
                <Route path="/Instruction" element={<Instruction/>}/>
                </Routes>
        </div>
           
        )
    }
}

export default Router