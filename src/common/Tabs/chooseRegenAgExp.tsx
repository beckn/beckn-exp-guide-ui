import React, { ReactElement, useEffect, useState } from "react";
import {
  signCiTransaction,
  signPayloadWithExtension,
} from "../../utility/signTransaction";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { useNavigate, useLocation } from "react-router-dom";
import ChooseExperience from "./chooseExperience";

import "./tabs.css";
import ModalSlider from "../ModalHTML/ModalSlider";
import { Button, QRCode } from "antd";
import RegenerativeInstruction from "../../welcome-page/RegenerativeAgriculture/regenerativeInstruction";
import RegenUEIFlow from "./regenUEIFlow";

export interface selectExpModalProps {
  iframeURL?: string;
  iframeRef?: React.RefObject<HTMLIFrameElement>;
  appDashboard?: React.ReactElement;
}

interface RegenerativeInstructionProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

interface RegenUEIFlowProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const ChooseRegenAgExp: React.FC<selectExpModalProps> = ({
  iframeURL,
  iframeRef,
  appDashboard,
}: selectExpModalProps) => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const location = useLocation();
  const currentExperience = location.pathname.split("/")[1];

  const isRegenAg = currentExperience === "regenerativeAgriculture";
  const isRegenUEI = currentExperience === "regenUEI";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenUEI, setIsModalOpenUEI] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModalUEI = () => {
    setIsModalOpenUEI(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelUEI = () => {
    setIsModalOpenUEI(false);
  };

  const handleNavigate = (id: string) => {
    navigate("/progress", { state: { experienceId: id } });
  };

  const iframeWindow = iframeRef?.current?.contentWindow;
  const iframeDocument = iframeRef?.current?.contentDocument;

  const handleSignTransaction = async () => {
    if (!iframeWindow || !iframeDocument) return;

    try {
      const accounts = await web3Accounts();
      const account = accounts[0];

      if (!account) {
        console.error("No account found");
        return;
      }

      const message = "Sign this transaction";
      const signature = await signPayloadWithExtension(
        account.address,
        message
      );

      if (signature) {
        iframeWindow.postMessage(
          { type: "SIGNED_TRANSACTION", signature },
          "*"
        );
      }
    } catch (error) {
      console.error("Error signing transaction:", error);
    }
  };

  useEffect(() => {
    async function handleMessage(event: MessageEvent) {
      if (
        (`${event.origin}/` !== process.env.REACT_APP_RETAIL_APP_DSNP_URL &&
          `${event.origin}/` !== process.env.REACT_APP_DSNP_APP_URL) ||
        !event.data.type ||
        !iframeRef?.current?.contentWindow
      )
        return;
      const iframeWindow = iframeRef.current.contentWindow;
      switch (event.data.type) {
        case "enablePolka":
          let enabled = await web3Enable("Social Web Example Client");
          if (enabled.length > 0) {
            const allAccounts = await web3Accounts();
            iframeWindow.postMessage(
              { type: "polkaAccounts", data: allAccounts },
              "*"
            );
          }
          break;
        case "signTransaction":
          const signedChallenge = await signPayloadWithExtension(
            event.data.data.selectedAccount.address,
            event.data.data.challenge
          );
          iframeWindow.postMessage(
            { type: "signTransaction", data: { signedChallenge } },
            "*"
          );
          break;
        case "signCiTransaction":
          const { handleSignature, addProviderSignature } =
            await signCiTransaction(event.data.data);
          iframeWindow.postMessage(
            {
              type: "signCiTransaction",
              data: {
                handleSignature,
                addProviderSignature,
                handle: event.data.data.handle,
                signingAccount: event.data.data.signingAccount,
              },
            },
            "*"
          );
          break;
        default:
          console.log("No event");
          break;
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [iframeRef]);

  return (
    <div className="tab-wrappper-content">
      <div className="text_wrapper">
        {appDashboard}
        {isRegenAg ? (
          <div className="regenAg-intruction">
            <img
              src="/assets/regenAg-instruction.svg"
              alt="regenAg-instruction"
            />
            <Button type="primary" onClick={showModal}>
              mode d'emploi
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <RegenerativeInstruction
              isModalOpen={isModalOpen}
              setIsModalRegenerativeAgriculture={setIsModalOpen}
            />
          </div>
        ) : null}
        {isRegenUEI ? (
          <div className="regenAg-intruction">
            <img
              src="/assets/regenUEI-instruction.svg"
              alt="regenUEI-instruction"
            />
            <Button type="primary" onClick={showModalUEI}>
              mode d'emploi
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <RegenUEIFlow />
          </div>
        ) : null}
      </div>
      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
            <iframe
              className="ChooseExpIframe"
              allow="clipboard-read; clipboard-write; geolocation"
              src={iframeURL}
              ref={iframeRef}
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegenAgExp;
