import './App.css';
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useCounterContract } from './hooks/useCounterContract';
import { useTonConnect } from './hooks/useTonConnect';
function App() {
  const { connected } = useTonConnect();
  const { value,address,sendIncrement } = useCounterContract();

  console.log(address);
  console.log(value);

  return (
    <div className="App">
      <div className='container'>
        <TonConnectButton />
        <div className="inner">
          <div className="item">
            <div className="content-container">
              <img src="1.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>229Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>

          <div className="item">
            <div className="content-container">
              <img src="2.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>229Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>

          <div className="item">
            <div className="content-container">
              <img src="3.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>329Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>

          <div className="item">
            <div className="content-container">
              <img src="4.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>429Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>

          <div className="item">
            <div className="content-container">
              <img src="5.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>529Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>

          <div className="item">
            <div className="content-container">
              <img src="6.jpg" alt="" className="img" />
                <div className="text-container">
                  <p>629Kč</p>
                </div>
            </div>
            <button className="btn" id="btn1">
              Add
            </button>
          </div>
        </div>
        
        <div className="usercard" id="usercard"></div>
        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
    </div>
  );
}

export default App
