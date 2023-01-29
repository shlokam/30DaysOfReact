const root = ReactDOM.createRoot(document.getElementById('root'));

function display(){
  
const name = "My Name"

const fullName = "Full Name"
const country = "India"
const title = "Miss"
const gender = "Female"
const email = "email@email.com"
const phoneNumber =0000000000

const footer = (
  <div>
    <h1>Footer</h1>
    <h1>{fullName}</h1>
    <p>{country}</p>
    <p>{title}</p>
    <p>{gender}</p>
    <p>{email}</p>
    <p>{phoneNumber}</p>
    </div>
  )
  root.render(footer);

}



