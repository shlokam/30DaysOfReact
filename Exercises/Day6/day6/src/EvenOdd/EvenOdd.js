import React, { useState } from 'react';

const ini = [
    {id:1,name:'tommy'},
    {id:2,name:'tommy2'}

]

const data=[]

const numb = []


const isPrime=(number) =>{

    if(number==1)
        return false;
    
    else {
        for(let i =2; i<number;i++){
            if(number%i==0)
                return false;
        }
    }
    return true;
}

const isEven = (number) =>{

    if(number%2==0)
        return true;
    
        return false;
}

const getColor= (status)=>{

        console.log("status "  + status);
    if(status==0)
        return '#36E1DE ';
    else if(status==1)
        return '#EBFF5B';
    
        return '#34CD34 ';
}


export default function EvenOdd(){

    // addNumb();
     console.log(numb)

    const [users,setusers] = useState(ini)
    let prime=false;
    let even=false;

    const renderHeader = () =>{
        return <tr>
            {Object.keys(ini[0]).map(key=> <th>{key}</th>)}
        </tr>
    }

    const renderUsers= () =>{

        for(let i=1;i<=30;++i){
            prime = isPrime(i);
            console.log(i)
            numb.id = i;
            //numb.status = 0;
            if(!prime){

                even = isEven(i);
                if(even){
                    numb.status=2;
                }
                else{
                    numb.status = 1;
                }
            }
            else {
                numb.status=0;
            }
            console.log("numb")
            console.log(numb)
            console.log(numb.id + " " + numb.status)
            const temp = [
                {id :numb.id,
                status: numb.status}
            ]
            data.push(temp)
         // data.id = numb.id;
          //data.status=numb.status
                
        }
        console.log("data")
        console.log(data[0]);
        console.log(data[0][0].id + " " + data[0][0].status)
        data[0].map(({id,status})=>{
            console.log("data id "+ {id} + " " + {status})
        })
      //  console.log(data.id + " " + data.status)
        const f1=[];
        const f2=[];
        const f3=[];

        for(let i=0;i<20;++i ){
            f1.push(data[i][0])
        }
        for(let i=10;i<20;++i ){
            f2.push(data[i][0])
        }
        for(let i=20;i<30;++i ){
            f3.push(data[i][0])
        }
        // console.log(f);



        return f1.map(({id,status})=>{

            return <td key={id} style={{ 
                 padding:'20px' , 
            border: '1px solid black',
            backgroundColor: getColor(status)
            }}>
                
                <tr >
                 {/* style={{
            //         // padding:'10px' , border: '1px solid black',
            // backgroundColor: getColor(status)}}> */}
                {id}</tr>
                {/* <td style={{padding:'10px' , border: '1px solid black'}}>{status}</td> */}

            </td>

        })
    }

    return(
        <div style = {{margin:'50px'}}>
            <h1>Even Odd Prime Table</h1> 
            <table>
                {/* {renderHeader()} */}
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>

            <h3>Color Code</h3>

            <table style={{marginLeft:'520px'}}>
                <tr>
                    <td>Prime</td>
                     <td style={{backgroundColor:'#36E1DE ', padding:'20px' , 
            border: '1px solid black'}}></td>
                </tr>
                <tr>
                    <td>Even</td>
                     <td style={{backgroundColor:'#34CD34 ', padding:'20px' , 
            border: '1px solid black'}}></td>
                </tr>
                <tr>
                    <td>Odd</td>
                     <td style={{backgroundColor:'#EBFF5B', padding:'20px' , 
            border: '1px solid black'}}></td>
                </tr>
            </table>

        </div>
    )
}

