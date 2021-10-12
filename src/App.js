import './App.css';
import Profile from './profile/profile';

function App() {
  const style = { color: "red", textAlign : "center"}
  const handleName=(fullName)=>{
    alert(`The name of the profile user is ${fullName}`)
  }
  
  return (
    <div className="App" style={style}>
      <Profile fullName ="Yasser Aouina" bio="https://bio.com" profession="full stack JS developer" handleName={handleName} ><img src="/profilePhoto.jpg" /></Profile>
    </div>
  );
}

export default App;