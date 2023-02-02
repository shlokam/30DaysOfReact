import React from 'react';

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

    let prime=false;
    let even=false;

    const renderUsers= () =>{

        for(let i=1;i<=30;++i){
            prime = isPrime(i);
         
            numb.id = i;
         
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
 
            const temp = [
                {id :numb.id,
                status: numb.status}
            ]
            data.push(temp)
    
                
        }
       
      //  console.log(data.id + " " + data.status)
        const f=[];
        

        for(let i=0;i<20;++i ){
            f.push(data[i][0])
        }
        



        return f.map(({id,status})=>{

            return <td key={id} style={{ padding:'20px' ,  border: '1px solid black', backgroundColor: getColor(status)}}>
                
                <tr >{id}</tr>
            </td>
        })
    }

    return(
        <div style = {{margin:'50px'}}>
            <h1>100 Days Of Code - Day 8</h1>
            <h2>30 Days of React - Day 6</h2>
            <h3>Even Odd Prime Table</h3> 
            <table>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>

            <h4>Color Code</h4>

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

