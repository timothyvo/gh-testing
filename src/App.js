import profilePic from './images/timpic.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tim's React Website</h1>
      <h2>Author: Timothy</h2>
      <img src={profilePic} alt="profile-img" />
    </div>
  );
}

export default App;
