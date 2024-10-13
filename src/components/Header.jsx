import logo from '../images/react-logo.png'
export default function Header() {
  return (
    <nav>
      <div className="nav-content">
        <img src={logo} className="react-logo"></img>
        <h2>ReactFacts</h2>
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}
