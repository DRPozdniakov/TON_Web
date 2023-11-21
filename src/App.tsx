import './App.css';
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useCounterContract } from './hooks/useCounterContract';
import { useTonConnect } from './hooks/useTonConnect';
function App() {
  const { connected } = useTonConnect();
  const { value,address,sendIncrement } = useCounterContract();

  return (
    <div className="App">
      <div className='container'>
        <TonConnectButton />
        <div className="inner">
          <div className="item">
              <img src="1.jpg" alt="" className="img" />
              <button className="btn" id="btn1">
                Add
              </button>
          </div>
          <div className="item">
              <img src="2.jpg" alt="" className="img" />
              <button className="btn" id="btn2">
                Add
              </button>
            </div>
            <div className="item">
              <img src="3.jpg" alt="" className="img" />
              <button className="btn" id="btn3">
                Add
              </button>
            </div>
            <div className="item">
              <img src="4.jpg" alt="" className="img" />
              <button className="btn" id="btn4">
                Add
              </button>
            </div>
            <div className="item">
              <img src="5.jpg" alt="" className="img" />
              <button className="btn" id="btn5">
                Add
              </button>
            </div>
            <div className="item">
              <img src="6.jpg" alt="" className="img" />
              <button className="btn" id="btn6">
                Add
              </button>
            </div>
          </div>
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
