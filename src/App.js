/* eslint-disabled */
import logo from './logo.svg';
import './App.css';

function Header(props) {
  // console.log('props\'s title: ',props.title);
  return <header>
    <h1><a href="" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  // debugger;
  const list = [];
  for(let i=0; i<props.topics.length; i++) {
    // console.log('topics i: ', i);
    let t = props.topics[i];
    list.push(<li key={t.id}>
      <a id={t.id} href={'./read/t.id'} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {list}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>
}
function App() {
  const topics = [
    {id:1, title:"HTML", body:"HTML is..."},
    {id:2, title:"CSS", body:"CSS is..."},
    {id:3, title:"JS", body:"JS is..."}
  ];
  return (
    <div>
      <Header title ="Web" onChangeMode={() =>{
        alert('Header!');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>  
  )
}

export default App;
