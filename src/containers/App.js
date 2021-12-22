import './App.css';
import React from 'react';
import { CardList } from '../components/CardList';
import {Searchbox} from '../components/Searchbox';   
// import {robos} from '../components/robos';     


class App extends React.Component {
constructor(){
  super()
  this.state ={        
    searchField:'',
    robos:[]
    // robos:robos     
  }
}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    return res.json();
  })
  .then(result =>{
    this.setState({robos:result});
  })
}

textChange =(event) => {  
  this.setState({searchField:event.target.value}) 
}

render(){
      const roboList = this.state.robos.filter((robos) => {
      return robos.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    if(roboList.length === 0){
      return <b>Loading...</b>      
    }
    else{
      return (
        <div className='tc'>
          <h1>Robo-Fans</h1>
          <Searchbox textChangeProps={this.textChange} />      
          <CardList robos={roboList} />
          {roboList.length === 0 ? <b>No records found...</b> : ''}
        </div>
      );  
    }
  }
}

export default App;
