import React from 'react'
import './Views.scss'
import HelloWorld from '../Components/HelloWorld';
function Home(){
    return(
        <div>
            <h1 className="homeHeading">This is the home page</h1>
            <HelloWorld name="Jayden" class="helloName"/>
        </div>
    )
}

export default Home