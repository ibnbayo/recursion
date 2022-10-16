// import logo from './logo.svg';
import Appbar  from './components/ResponsiveAppBar'
import './App.css';

function App() {
  return (
    <>
      <Appbar/>
      <div className=' grid-rows-3'>
        <div>
        <h1 className='text-6xl font-extrabold justify-center'>Teaching has never been easier </h1>
        <p>Host live classes, collaborate with learing mates and manage your tutors/students</p>
        </div>
        <img src='https://cdn.nerdschalk.com/wp-content/uploads/2020/05/nerdschalk.com-3x3-video-view-on-microsoft-teams.jpg?width=1300' alt='video-app'/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          <a target="_blank" rel = "noreferrer" href='https://collaboration-video-app.netlify.app/'>Start a video</a>
        </button>
        
      </div>
    </>
  );
}

export default App;
