import { ethers } from "ethers";
import { useEffect,useState } from "react";
import BaseContract from './abis/BaseContract.json';
import HelloWorld from './abis/HelloWorld.json'

function App() {

  /*const ContractAddress="0x86677E1c7e92F38564478e85D2963d8c5E9db31A"; GameTestToken Main Contract Adress */
  const ContractAddress="0xC479e8FEeA60463E7Fdb158F3AfAf34909746605"; //Emre Dişçi Hello World Kontrat
  const BscTestNetRpc="https://data-seed-prebsc-1-s1.binance.org:8545";
  const MetamaskPrivateKey="0xe5056988ef02a886dd58dd7ad639a6461d6542491e859f7f56100b79a633bd6b";
  const gasPrice = ethers.utils.parseUnits('50', 'gwei');
  const gasLimit = 250000;
  var options = { gasPrice: gasPrice, gasLimit: gasLimit};
  /*const [MinterRole, setMinterRole] = useState("")
  const [TotalSupply, setTotalSupply] = useState("");*/

   async function Start(){
    const provider=new ethers.providers.JsonRpcProvider(BscTestNetRpc);
    const wallet=new ethers.Wallet(MetamaskPrivateKey,provider);
    const Contract=new ethers.Contract(ContractAddress,HelloWorld,wallet);

    console.log(await Contract.message());
    const txid= await Contract.changeMessage("Hello Kodline",options)
    await txid.wait()
    console.log(await Contract.message());

    //etMinterRole(await Contract.MINTER_ROLE());
        /* global BigInt */
    //setTotalSupply(BigInt(await Contract.totalSupply()))*/

  }

  useEffect(() => {
    Start();
  }, [])
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
