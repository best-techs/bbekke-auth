import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Default from './App';

import Preloader from './Preloader/Preloader';


const LazyLoadedComp = React.lazy(()=> import('./App'));

const root = ReactDOM.createRoot(document.getElementById('fest_root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader /> }>
      <LazyLoadedComp />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();