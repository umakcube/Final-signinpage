import logo from './logo.svg';
import './App.css';
import './components/Form.css'
import Form from './components/Form';
import Responsiive from './components/Responsiive';
import MyMediaQuery from './components/MyMediaQuery';
import PasswordIcon from './components/PasswordIcon';



// import React, { Component } from 'react';
// import FromSiginUp from './components/FromSiginUp';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
//   }

//   componentDidMount() {
//     const handler = e => this.setState({matches: e.matches});
//     window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
//   }
//   render() {
//     return (
//       <div >
//       {this.state.matches && (<h1><Form /></h1>)}
//       {!this.state.matches && (<h3><FromSiginUp /></h3>)}
//       </div>
//     );
//   }
// }

// export default App;









function App() {
  return (
    <div className="main">
       {/* <Form /> */}
       {/* <Responsiive /> */}
       <MyMediaQuery />
       {/* <PasswordIcon /> */}
    
    </div>
  );
}

export default App;
