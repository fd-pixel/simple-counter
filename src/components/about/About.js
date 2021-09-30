// import React, { Component } from 'react'

// export class About extends Component {
// constructor(){
//     super ()
//     this.state = {
//         count :4,
//         name :"Fikret"
//         // birinci :{
//         //     name:"Fikret",
//         //     age:25},

//         // ikinci:{
//         //     name:"Ali",
//         //     age:45},

//     }}
//     handleClickIncrease = ()=>{
//         this.setState ({count : this.state.count +1})
//     }

//     handleClickDecrease =()=>{
//         if (this.state.count >0 )
//         this.setState ({count : this.state.count -1})

//     }
//     handleClickReset= () =>{
//         this.setState ({count : 0})

//     }
//     handleNameChange = () => {
//         this.setState({name:"Asel Büşra"})
//       }

//     render() {
//         return (
//             <div style ={{marginTop :"10rem"}}>
//                 <button onClick = {this.handleClickIncrease} >+</button>
//                 <p style ={{color:"red", fontSize: "2rem"}}>{this.state.count}</p>
//                 <button onClick = {this.handleClickDecrease}>-</button><br/>
//                 <button style ={{marginTop :"2rem"}}onClick = {this.handleClickReset}>Reset</button><br/>
//                 <p>{this.state.name}</p>
//                 {/* //<p>{this.state.ikinci.age}</p> */}
//                 <button onClick={this.handleNameChange}>Name Change</button>

//             </div>
//         )
//     }
// }

// import React, { Component } from "react";

// export default class About extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       name: "Fikret",
//       //name leri her klilkte değiştirsin!!!
//     };
//   }
//   handleClickIncrease=()=>{
//       this.setState({ count : this.state.count+1})
//   }
//   handleClickDecrease=()=>{
//       if (this.state.count>0)
//       this.setState({ count : this.state.count-1})
//   }
//   handleReset=()=>{

//       this.setState({ count : 0})
//   }
//   handleChangeName =() => {

//     this.setState({name:"Veli"})
//   }

//   render() {
//     return (
//         <div style ={{marginTop :"10rem"}}>
//         <button onClick= {this.handleClickIncrease} style={{ fontSize: "2rem" }}>+</button>
//         <p style={{ fontSize: "2rem" }}>{this.state.count}</p>
//         <button onClick ={this.handleClickDecrease} style={{ fontSize: "2rem" }}>-</button><br/>
//         <br/>
//         <br/>
//         <button style ={{marginTop:"1rem", color :"red" }} onClick= {this.handleReset}>Reset</button>
//         <p >{this.state.name}</p>
//         <button style ={{marginTop:"1rem", color :"red" }} onClick ={this.handleChangeName}>Change Name</button>
//       </div>
//     );
//   }
// }

// import React, { useState } from "react";

// export const About = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Fikret");

//   const handleClickIncrease = () => {
//     setCount(count + 1);
//   };
//   const handleClickDecrease = () => {
//     if (count > 0) setCount(count - 1);
//   };
//   const handleReset = () => {
//     setCount(0);
//   };
//   const handleChangeName = () => {
//     setName("Veli");

//   };

//   return (
//     <div style={{ marginTop: "10rem" }}>
//       <button onClick={handleClickIncrease} style={{ fontSize: "2rem" }}>
//         +
//       </button>
//       <p style={{ fontSize: "2rem" }}>{count}</p>
//       <button onClick={handleClickDecrease} style={{ fontSize: "2rem" }}>
//         -
//       </button>
//       <br />
//       <br />
//       <br />
//       <button onClick={handleReset} style={{ marginTop: "1rem", color: "red" }}>
//         Reset
//       </button>
//       <p>{name}</p>
//       <button
//         onClick={handleChangeName}
//         style={{ marginTop: "1rem", color: "red" }}
//       >
//         Change Name
//       </button>
//     </div>
//   );
// };
import React from "react";
import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(10);
  const handleClickIncrease = () => {
    setCount(count + 1);
  };
  const handleClickDecrease = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };
  return (
    <div style={{ marginTop: "10rem" }}>
      <button onClick={handleClickIncrease}>+</button>
      <p>{count}</p>
      <button onClick={handleClickDecrease}>-</button>
      <p>
        <button onClick={handleClickReset}>Reset</button>
      </p>
    </div>
  );
};

export default About;
