import React from 'react';
import ReactDOM from 'react-dom';
import './indexnew.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

/*导入组件，然后渲染组件*/
/*ReactDOM.render(<Appnew />, document.getElementById('root'))*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
