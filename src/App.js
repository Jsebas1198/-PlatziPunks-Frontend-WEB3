/*import Web3 from "web3";
import { useEffect } from "react"; */
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import MainLayout from "./layout/main";
import Punks from "./views/punks";
import Punk from "./views/punk";

function App() {
  /* useEffect(() => {
    if (window.ethereum) {
      // window.ethereum
      //   .request({
      //     method: "eth_requestAccounts",
      //   })
      //   .then((accounts) => console.log(accounts));

      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);
    }
  }, []);*/

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/punks" exact element={<Punks />} />
          <Route path="/punks/:tokenId" exact element={<Punk />} />
          </Routes>
       
      </MainLayout>
    </>
  );
}

export default App;
