import { useAccount } from "wagmi";
import { readContract } from "@wagmi/core";
import { contractAddress,contractABI } from "./web3/helperContract";
import { config } from "./web3/Web3Provider";
import { useState,useEffect } from "react";
import { get } from "http";

function Dashboard(){
    const { address, isConnecting, isDisconnected } = useAccount();
    const [userInfo, setUserInfo] = useState<Record<string, any> | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function getUserInfo(){
        try {
            if (!address) return; 
      
            const user = await readContract(config,{
              abi: contractABI,
              address: contractAddress,
              functionName: "getUser",
              args: [address], 
            });
            
            setUserInfo(user); 
          } catch (err) {
            console.error("Error fetching user info:", err);
            setError("Failed to fetch user information");
          }
        }
      
        useEffect(() => {
          if (address) {
            getUserInfo();
          }
        }, [address]);
    return(
        <div className="py-12 md:py-20 mx-auto max-w-6xl px-4 sm:px-6">
      {isConnecting && <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl text-center mb-10">Connecting...</p>}
      {isDisconnected && <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl text-center mb-10">Wallet is disconnected</p>}
      {address && !userInfo && !error && <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl text-center mb-10">Fetching user information...</p>}
      {error && <p>{error}</p>}
      {userInfo && (
        <div>
          <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl text-center mb-10">User Information</h3>
          <ul>
            {Object.entries(userInfo).map(([key, value]) => (
              <li className="text-lg text-indigo-200/65"  key={key}>
                <strong className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}
export default Dashboard