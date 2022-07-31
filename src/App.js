import React from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}


// function App() {
//   return (
//     <div className="container">
//       <Header title='Hello' />
//     </div>
//   );
// }

// class component
// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

export default App;
