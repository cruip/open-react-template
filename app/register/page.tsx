"use client"

import { Step, StepContent, StepLabel, Stepper, Typography, StepIconProps } from "@mui/material";
import { useState } from "react";
import styles from "../css/additional-styles/register.module.css";
import { Web3Provider } from "@/components/web3/Web3Provider";
import { ConnectButton } from "@/components/web3/customConnectBtn";

function Register() {
  const [activeStep, setActiveStep] = useState(0);

  const CustomStepIcon = (props: StepIconProps) => {
    const { active, completed, icon } = props;

    return (
      <div
      className=""
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

  return (
    <main className={"mx-auto max-w-screen-xl"}>
      <div className={"flex flex-col gap-6 pt-12 px-10 mb-10"}>
        <div className={"py-4"}>
          <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Register</span>
          <br />
          <span>Please connect your wallet and then go through the register process</span>
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
              <Web3Provider>
                <ConnectButton/>
              </Web3Provider>

              <button
                className={"btn btn-primary w-full mt-3"}
                onClick={() => setActiveStep(1)}
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
              <button
                className={"btn btn-primary"}
                onClick={() => setActiveStep(2)}
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
              <button
                className={"btn btn-primary mt-3"}
                onClick={() => setActiveStep(3)}
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
              <Typography className={styles.description}>
                Enter your username
              </Typography>
              <button
                type="submit"
                className={"btn btn-primary mt-3"}
                onClick={() => alert("Registered!")}
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



