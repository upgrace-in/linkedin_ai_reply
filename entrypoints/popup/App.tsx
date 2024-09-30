import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import '../../assets/main.css'

function App() {
  return (
    <>
      <h1>LinkedIn AI Reply</h1>
      <p>As per your word, I have used WXT, ReactJS & Typescript (with Tailwind too)</p>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
