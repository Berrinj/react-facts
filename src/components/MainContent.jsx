export default function MainContent() {
    return (
      <div className="main-content">
        <div className="facts-container">
        <h1 className="main--title">Fun Facts about React</h1>
        {/* <img src="/src/images/react-logo.png" className="react-logo-main"></img> */}
        <ul className="main--ul">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        </div>
    )
  }