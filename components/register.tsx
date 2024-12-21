import { Step, StepContent, StepLabel, Stepper, Typography, StepIconProps } from "@mui/material";
import React, { useState,useEffect } from "react";
import styles from "../app/css/additional-styles/register.module.css";
import { Web3Provider } from "@/components/web3/Web3Provider";
import { ConnectButton } from "@/components/web3/customConnectBtn";
import {contractAddress,usdtAddress , contractABI} from "./web3/helperContract";
import { config } from "@/components/web3/Web3Provider";
import { writeContract,readContract} from "wagmi/actions";
import { erc20Abi,getAddress,parseUnits } from "viem";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [amount,setAmount]=useState(10);
  const[reffralId,setReffralId]=useState("")
  const { address, isConnecting, isDisconnected } = useAccount();
  const [connectError,setConnectError]=useState("")
  const[approveError,setApproveError]=useState("")
  

  async function registerUser(amount: number, reffralId: string){
    if (!amount || amount <= 10) {
      console.error("Amount must be greater than 10");
      return;
    }
    if (!reffralId) {
      console.error("Referral ID is required");
      return;
    }
    try {
      const result = await writeContract(config, {
        address: contractAddress,
        abi: contractABI,
        functionName: "register",
        args: [ parseUnits(amount.toString(),18) , getAddress(reffralId)],
      });
      console.log("Transaction successful:", result);
    } catch (error) {
      console.error("Transaction failed:", error);
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

  async function handleAmount(e:React.ChangeEvent<any>){
    let amt=Number(e.target.value)
    setAmount(amt)
    console.log(amount)
    
  }
  async function handleReffralId(e:React.ChangeEvent<any>){
    let rfrid=e.target.value
    setReffralId(String(rfrid))
    console.log(reffralId)
  }
  const [isUser,setIsUser]=useState<boolean | null>(null)
  const [referralError, setReferralError] = useState<string | null>(null);

   async function isValidReffralId(){
    try {
        const isuser = await readContract(config, {
          abi: contractABI,
          address: contractAddress,
          functionName: "isUser",
          args: [getAddress(reffralId)], 
        });
        setIsUser(Boolean(isuser));
        return Boolean(isuser);
      } catch (error) {
        console.error("Error validating referral ID:", error);
        setIsUser(false);
        return false;
      }
  }
  async function handleReferralContinue() {
    if (!reffralId) {
      setReferralError("Referral ID is required.");
      return;
    }
  
    const isValid = await isValidReffralId();
    if (!isValid) {
      setReferralError("Invalid referral ID. Please check and try again.");
    } else {
      setReferralError(null); 
      setActiveStep(3); 
  }
}
async function handleConnectBTN(){
  if(!address){
    setConnectError("wallet is not connected");
    toast.error("you have to connect your wallet to go to the next step!")
    return;
  }else{
    setConnectError("");
    setActiveStep(1)
    
  }
}
async function handleApproveContinue(){
  if (!amount || amount<10 ){
    setApproveError("you cant enter with less than 10 USDT")
    toast.error("you cant enter with less than 10 USDT")
    return;
  }else{
    setApproveError("")
    setActiveStep(2)
  }
}

  const CustomStepIcon = (props: StepIconProps) => {
    const { active, completed, icon } = props;

    return (
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: completed
            ? "#4F46E5"
            : active
            ?  "#4F46E5" 
            : "gray", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {completed ? <span> &#x2713; </span> : icon }
      </div>
    );
  };
  React.useEffect(() => {
    console.log("Amount updated:", amount);
  }, [amount]);
  
  React.useEffect(() => {
    console.log("Referral ID updated:", reffralId);
  }, [reffralId]);

  return (
    <main className={"mx-auto max-w-screen-xl"}>
      <div className={"flex flex-col gap-6 pt-12 px-10 mb-10"}>
        <div className={"py-4"}>
          <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Register</span>
          <br />
          <span>Please connect your wallet and then go through the registeration process</span>
        </div>

        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key={0}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <span className={styles.label}>Connect Wallet</span>
            </StepLabel>
            <StepContent className="flex">
              <Typography className="mb-2 pb-5 block text-sm font-medium text-indigo-200/65">
                Connect your wallet
              </Typography>
              <div className="flex items-center justify-center flex-col pl-5">             
                <ConnectButton/>
              <button
                className={"btn btn-primary w-full mt-3"}
                onClick={handleConnectBTN}
              >
                Continue
              </button>
              </div>             
            </StepContent>
          </Step>

          <Step key={1}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <span className={styles.label}>Approve Register</span>
            </StepLabel>
            <StepContent>
              <Typography className="mb-1 block text-sm font-medium text-indigo-200/65">
                Approve the amount for it
              </Typography>

              <input onChange={
                (e)=> handleAmount(e)
              } 
              className="form-input w-full" value={amount}/>
              <button
                className="btn btn-primary"
                onClick={() => approveToken(amount)}
              >
                Approve
              </button>
              <button
                className={"btn btn-primary"}
                onClick={handleApproveContinue}
              >
                Continue
              </button>

            </StepContent>
          </Step>

          <Step key={2}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <span className={styles.label}>Referral</span>
            </StepLabel>
            <StepContent>
              <Typography className="mb-1 block text-sm font-medium text-indigo-200/65">
                Do you have a referral?
              </Typography>
              <input onChange={
                (e)=> handleReffralId(e)
              } 
              className="form-input w-full" value={reffralId}/>
              {referralError && (
                <Typography className="text-red-500 text-sm mt-1">
                    {referralError}
                </Typography>
                )}
                <button
                className={"btn btn-primary mt-3"}
                onClick={handleReferralContinue}
                >
                Continue
                </button>
            </StepContent>
          </Step>

          <Step key={3}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <span className={styles.label}>Register</span>
            </StepLabel>
            <StepContent>
              <button
                type="submit"
                className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[10px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                onClick={() => registerUser(amount,reffralId)}
              >
                Register
              </button>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </main>
    
  );
 }


export default Register;



