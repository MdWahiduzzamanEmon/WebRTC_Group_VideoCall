import React, { Suspense } from 'react';
import './App.css';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import 'bootstrap/dist/css/bootstrap.css'
const Routing = React.lazy(() => import('./components/Routing/Routing'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
          <AuthProvider>
            <Routing />
          </AuthProvider>
      </Suspense>
    </div>
  );
}

export default App;
