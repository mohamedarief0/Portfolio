// import About from ''
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './ProfileComponent/Home'
import About from './ProfileComponent/About'
import Project from './ProfileComponent/Project'
import Skills from './ProfileComponent/Skills'

function App() {
  return (
    <div className="">
      <nav>
        <div id='col'>

        <div className='fixed'>


        <div  className='title'>
          <img src='./images/Logo.jpg' className='logo' alt='this an img logo' />

        
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/project'}>Project</Link>
          <Link to={'/skills'}>Skills</Link>

        </div>

        </div>


      <div className='routers'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>}/>
          <Route path='/Project' element={<Project></Project>}/>
          <Route path='/skills' element={<Skills></Skills>}/>
        </Routes>
      </div>

      </div>
      </nav>

    </div>
  );
}

export default App;
