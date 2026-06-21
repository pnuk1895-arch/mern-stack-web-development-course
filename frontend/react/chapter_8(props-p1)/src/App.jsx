import Header from "./components/1.Header"
import Hero from "./components/2.HeroSection"
import Mentor from "./components/3.mentor"
import Founder from "./components/4.founder"
import Footer from "./components/5.Footer"
import "./components/App.css"

function App(){
   const founders = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder"
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Co-Founder"
    }
  ];
   const mentors = [
    {
      id: 1,
      name: "Shahid",
      skill: "MERN Stack Developer"
    },
    {
      id: 2,
      name: "Ali",
      skill: "React Developer"
    },
    {
      id: 3,
      name: "Sara",
      skill: "Backend Developer"
    }
  ];
  return(
    <>
    <Header />
    <Hero />
    <Mentor mentorData={mentors} />  
    <Founder founderData={founders} />
    <Footer />
    </>   
  );
}
export default App

// props={
  // mentorData:[]
// }
