import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Good from "./good/good";

/**
 * Приложение
 */
function App() {
  const select = useSelector(state => ({
    name: state.modals.name,
    state: state
  }));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/good/:id" element={<Good />}/>
        <Route path="*" render={() => <h1>404 Not Found</h1>}/>

        {/*<Main/>*/}
        {/*{select.name === 'basket' && <Basket/>}*/}
      </Routes>

      {select.name === 'basket' && <Basket/>}
    </BrowserRouter>
  );
}

export default React.memo(App);
