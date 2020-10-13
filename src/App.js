import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/board.css';
import IndexRouter from "./router/IndexRouter";
import { Provider } from "react-redux";
import configureStore from "./store";
import { PersistGate } from 'redux-persist/integration/react';

import { positions,transitions, Provider as ProviderAlert } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 1000000
    }
};

function App() {
  const { store, persistor } = configureStore();
  return (
      <Provider store={store} >
          <ProviderAlert template={AlertTemplate} {...options}>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                crossOrigin="anonymous"/>
           <script>
               if(/Android 4\.[0-3]/.test(navigator.appVersion)){
               window.addEventListener("resize", function(){
                   if(document.activeElement.tagName==="INPUT"){
                       window.setTimeout(function(){
                           document.activeElement.scrollIntoViewIfNeeded();
                       },0);
                   }
               })
           }
           </script>
          <PersistGate loading={null} persistor={persistor}>
            <div className="App">
              <IndexRouter/>
            </div>
          </PersistGate>
          </ProviderAlert>
      </Provider>
  );
}

export default App;
