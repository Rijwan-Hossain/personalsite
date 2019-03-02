import React from 'react'
import me from '../../Assets/Images/me2.jpg'

const Left = () => { 
    return ( 
        <div style={{
            paddingRight: '15px', 
            borderRight: '1px solid rgb(238, 238, 238)' 
        }}> 
            <h3 className="text-center">Intro</h3> 
            <div className="flex">
                <strong> 
                    <p className="lead" style={{fontSize: '17px'}}>
                        I am blessed with the best.
                    </p> 
                    <p 
                        style={{
                            marginTop: '-10px', 
                            paddingTop: '0px', 
                            fontSize: '17px' 
                        }} 
                        className="text-success lead" 
                    >
                        Alhumdulilah 
                    </p> 
                </strong> 
            </div>
            <hr width="90%" /> 

            <p className="lead" style={{fontSize: '17px'}}>     
                Name: Rijwan Hossain <br/> 
                Religious: Islam <br/> 
                Occupation: Student (CSE) <br/> 
                Contact: 01758712370 <br/> 
                Lives in: <a href="https://en.wikipedia.org/wiki/Dhaka">Dhaka, </a> 
                <a href="https://en.wikipedia.org/wiki/Bangladesh">Bangladesh</a> 
                <br/>
                School: <a href="http://progatihighschool.yolasite.com/"> Progati High School</a>
                <br/>
                College: <a href="http://gbcmirpur.edu.bd/index.php"> Gov't Bangla College</a>
                <br/> 
                University: <a href="http://green.edu.bd">GUB</a> 
                <br/> <br/> 
            </p> 


            <p style={{
                paddingTop: '10px', 
                textAlign: 'justify', 
                fontSize: '17px'
            }} className="lead">
                I have solved over 400 programming problems in varoius online judges such as {' '}
                <a href="https://www.urionlinejudge.com.br/judge/en/users/statistics/107459">URI</a>, 
                <a href="https://uhunt.onlinejudge.org/id/878669">UVA</a> etc. 
            </p> 
            <p 
                style={{ 
                    paddingTop: '10px', 
                    textAlign: 'justify',
                    marginTop: '0px', 
                    fontSize: '17px'
                }} 
                className="lead" 
            > 
                Besides that I have also participated in few programming contest & came 1st/2nd/3rd in most of the contest. Secured 1st place in both IPC-1 & IPC-2. Secured 2nd, 3rd & 3rd place respectively in CSE Carnival 2016, 2017 & 2018 are the greatest achievement of my programming career. 
            </p> 

            
            <div className="Card img-center">
                <img 
                    src={me} 
                    alt="I, Me, Myself" 
                    width="175px"
                    className="pt-3 pb-3"
                /> 
            </div>
        </div> 
    ) 
} 

export default Left
