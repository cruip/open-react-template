import { useAccount } from "wagmi";
import { writeContract,readContract } from "@wagmi/core";
import { contractAddress,usdtAddress, contractABI } from "./web3/helperContract";
import { config } from "./web3/Web3Provider";
import { useState, useEffect } from "react";
import UpgradePlanModal from "./upgradeplan";
import { erc20Abi,parseUnits } from "viem";


function Dashboard() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [userInfo, setUserInfo] = useState<Record<string, any> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  async function getUserInfo() {
    try {
      if (!address) return;

      const user = await readContract(config, {
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



  async function approveToken(amount: number) {
    try {
      const result = await writeContract(config,{
        address: usdtAddress, 
        abi: erc20Abi, 
        functionName: "approve",
        args: [contractAddress , parseUnits(amount.toString(),18)], 
      });
      console.log("Approval successful:", result);
    } catch (error) {
      console.error("Approval failed:", error);
    }
  }



  async function handleUpgrade(amount: string) {
    if (!address || !amount) {
      setError("Invalid amount or address");
      return;
    }
    try {
    const tx = await writeContract(config, {
        abi: contractABI,
        address: contractAddress,
        functionName: "upgradePlan",
        args: [parseUnits(amount.toString(),18)],
      });

      console.log("Transaction sent:", tx);
      console.log("Transaction confirmed");
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error upgrading plan:", err);
      setError("Failed to upgrade plan. Please try again.");
    }
  }

  useEffect(() => {
    if (address) {
      getUserInfo();
    }
  }, [address]);

  return (
    <div className="py-12 md:py-20 mx-auto max-w-6xl px-4 sm:px-6">
      {isConnecting && (
        <p className="animate-gradient bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold">
          Connecting...
        </p>
      )}
      {isDisconnected && (
        <p className="animate-gradient bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold">
          Wallet is disconnected
        </p>
      )}
      {address && !userInfo && !error && (
        <p className="animate-gradient bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold">
          Fetching user information...
        </p>
      )}
      {error && (
        <p className="text-red-400 text-center text-lg font-semibold">
          {error}
        </p>
      )}
      {userInfo && (
        <div className=" p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 text-center mb-8">
            User Information
          </h3>
          <ul className="space-y-4">
            {Object.entries(userInfo).map(([key, value]) => (
              <li
                className="text-lg text-indigo-200 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-indigo-900/50 rounded-lg px-4 py-3 shadow-md"
                key={key}
              >
                <span className="font-semibold text-indigo-300">{key}:</span>
                <span className="mt-1 sm:mt-0 sm:ml-4 text-indigo-100">
                  {String(value)}
                </span>
              </li>
            
                ))}
            </ul>
            {isModalOpen && <UpgradePlanModal />}
        </div>
        )}
        </div>
    );
    }

export default Dashboard;
