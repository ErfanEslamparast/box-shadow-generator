import { useState } from "react";

function App() {
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(5);
  const [color, setColor] = useState('#000');
  const [showToast, setShowToast] = useState(false);
  const clickHandler = ()=>{
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 1200);
  }

  return (
    <div className="app">
        <div className="control">
          <div className="form-group">
             <label>طول افقی</label>
             <input type="range" 
             min="-200"
             max="200"
             class="form-range"
             onChange={(e)=>setHorizontal(e.target.value)} />
          </div>
          <div className="form-group">
             <label>طول عمودی</label>
             <input type="range" 
             min="-200"
             max="200"
             class="form-range"
             onChange={(e)=>setVertical(e.target.value)} />
          </div>
          <div className="form-group">
             <label>تاری</label>
             <input type="range"
             min="0"
             max="100"
             class="form-range"
             onChange={(e)=>setBlur(e.target.value)} />
          </div>
          <div className="form-group">
             <label>گسترش رنگ</label>
             <input type="range" 
             min="-100"
             max="50"
             class="form-range"
             onChange={(e)=>setSpread(e.target.value)} />
          </div>
          <div className="form-group">
             <label>رنگ</label>
             <input type="color"
             onChange={(e)=>setColor(e.target.value)}/>
          </div>
        </div>
        <div className="outpot">
          <div className="box"
          style={{boxShadow : `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`}}
          >
            <p
             onClick={() => {
              const text= `box-shadow: ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;
              
              navigator.clipboard.writeText(text)
                .then(clickHandler)
                .catch(err => console.error('Failed to copy: ', err));
            }
            }>
              box-shadow: {horizontal}px {vertical}px {blur}px {spread}px {color}</p>
          </div>
        </div>
          {showToast &&
            (<div class={showToast ? 'showToast toast align-items-center' : 'toast align-items-center'}  id="myToast" role="alert">
              <div class="toast-body w-100 bg-success text-white d-flex justify-content-around ">
              <button type="button" class="btn-close text-white" data-bs-dismiss="toast" aria-label="Close"
              onClick={()=>setShowToast(false)}></button>

              Copied To Clipboard
              </div>
          </div>
          )
          }
    </div>
  );
}

export default App;
