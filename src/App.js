import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
  <h1><a href='/'>Web</a></h1>
</header>
}
function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Header></Header>
      <nav>
        <ol>
          <li><a href='/read/1'>HTML</a></li>
          <li><a href='/read/2'>CSS</a></li>
          <li><a href='/read/3'>JS</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
      </article>
    </div>
  );
  refreshPage()
}

export default App;
