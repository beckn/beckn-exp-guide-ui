import { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import ModalSlider from "../common/ModalHTML/ModalSlider";
import { Button } from "antd";

const imageStyle = {
  borderRadius: "50%",
  width: "200px", 
  height: "200px",
  objectFit: "cover",
  margin: "0 auto",
  display: "block",
} as const;

const OpenSparkIframe = () => {
  const openSparkVaultUrl = process.env.REACT_APP_OPEN_SPARK_WALLET_URL;
  const openSparkRetailStoreUrl = process.env.REACT_APP_OPEN_SPARK_RETAIL_URL;
  const openSparkLendUrl = process.env.REACT_APP_OPEN_SPARK_LEND_URL;
  const openSparkSolaris = process.env.REACT_APP_OPEN_SPARK_Solaris_URL;
  const [openSpark, setopenSpark] = useState(openSparkVaultUrl);
  const [activeButton, setActiveButton] = useState("for_Vault");
  const [retailsModal, setRetailsModal] = useState(false);
  const [lendModal, setLendModal] = useState(false);
  const [vaultModal, setVaultModal] = useState(false);
  const [isModalOpenhimalayas, setIsModalOpenhimalayas] = useState(false);

  const handleOsmLink = (e: any) => {
    setopenSpark(openSparkSolaris);
    setActiveButton("for_cutm_name");
    setRetailsModal(false);
    setLendModal(false);
    setVaultModal(false);
  };
  const handleRetailStore = (e: any) => {
    setopenSpark(openSparkRetailStoreUrl);
    setActiveButton("for_tetail_store");
    setRetailsModal(true);
    setLendModal(false);
    setVaultModal(false);
  };
  const handleLendApp = (e: any) => {
    setopenSpark(openSparkLendUrl);
    setActiveButton("for_lend_name");
    setRetailsModal(false);
    setLendModal(true);
    setVaultModal(false);
  };

  const handVaultApp = (e: any) => {
    setopenSpark(openSparkVaultUrl);
    setActiveButton("for_Vault");
    setRetailsModal(false);
    setLendModal(false);
    setVaultModal(true);
  };

  const showModalhimalayas = () => {
    setIsModalOpenhimalayas(true);
  };

  const handleCancelhimalayas = () => {
    setIsModalOpenhimalayas(false);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <ChooseExperience
          // headingText="enabling commerce on  "
          textURL={"/assets/spark-text1.svg"}
          descriptionText={
            <div style={{ fontWeight: 400 }}>
              Turn your battery into a money-maker! Rent, trade, and finance
              energy effortlessly with UEI-powered apps. Link your wallet,
              unlock better deals, and watch your energy assets work for you.
              The future of smart energy is here—power up and profit!
            </div>
          }
          setTourismUrl={setopenSpark}
          iframeURL={openSpark}
          languageEng={"english"}
          languageFra={"français"}
          retailsModal={retailsModal}
        />

        <div className="osc_tab_change open-spark-tab-change">
          <div
            className={`for_cutm_name open-spark-btn ${
              activeButton === "for_Vault" ? "active" : ""
            }`}
            onClick={handVaultApp}
          >
            {activeButton === "for_Vault" ? (
              <img src="/assets/vault-active.svg" alt="vault-active" />
            ) : (
              <img src="/assets/vault.svg" alt="vault" />
            )}
            Vault
          </div>
          <div
            className={`for_tetail_store open-spark-btn ${
              activeButton === "for_tetail_store" ? "active" : ""
            }`}
            onClick={handleRetailStore}
          >
            {activeButton === "for_tetail_store" ? (
              <img
                src="/assets/Kuza_Logo_White_Trans.svg"
                alt="Kuza_Logo_White_Trans"
              />
            ) : (
              <img
                src="/assets/Kuza_Logo_White_Trans-1.svg"
                alt="Kuza_Logo_White_Trans-1"
              />
            )}
            Spark
          </div>
          <div
            className={`for_cutm_name open-spark-btn ${
              activeButton === "for_cutm_name" ? "active" : ""
            }`}
            onClick={handleOsmLink}
          >
            {activeButton === "for_cutm_name" ? (
              <img src="/assets/battery-1.svg" alt="battery-1" />
            ) : (
              <img src="/assets/battery.svg" alt="battery" />
            )}
            Solaris
          </div>
          <div
            className={`for_cutm_name open-spark-btn ${
              activeButton === "for_lend_name" ? "active" : ""
            }`}
            onClick={handleLendApp}
          >
            {activeButton === "for_lend_name" ? (
              <img src="/assets/money_white.svg" alt="money_white" />
            ) : (
              <img src="/assets/money_bag.svg" alt="money_bag" />
            )}
            Lend Ease
          </div>
        </div>
        <img
          src="/assets/open-spark-footer3.svg"
          className="open-spark-footer-logo"
          alt="open-spark-footer"
        />

        <div className="DSEP-intruction spark-instruction">
          <Button
            type="primary"
            onClick={showModalhimalayas}
            style={{
              position: "absolute",
              bottom: "40px",
              left: "0",
              margin: "unset",
              display: "flex",
              alignItems: "center",
              padding: "6px 20px",
              height: "48px",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            instructions
            <img
              style={{ paddingLeft: "5px" }}
              src="/assets/arrow_back.svg"
              alt="Arrow"
            />
          </Button>
          <ModalSlider
            open={isModalOpenhimalayas}
            onCancel={handleCancelhimalayas}
            modalHeading={
              "Follow these steps for the best possible experience as an energy Prosumer!"
            }
          >
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 1
              </h3>
              <img
                src="/assets/step1.svg"
                alt="Step 1"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "20px" }}>
                  Select{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    'Vault'
                  </span>{" "}
                  app on the landing page.
                </p>
                <p>
                  Sign in to the{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    vault
                  </span>{" "}
                  app using your mobile number: 9999988888
                </p>
                <p style={{ paddingTop: "20px" }}>
                  Enter random 6 digit number as OTP: 123456 to verify your
                  mobile number
                </p>
                <p style={{ paddingTop: "20px" }}>
                  On the landing page,
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    {" "}
                    click on{" "}
                  </span>
                  'connections'
                </p>
                <p style={{ paddingTop: "20px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    {" "}
                    Click on{" "}
                  </span>
                  Add new button.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 2
              </h3>
              <img
                src="/assets/step2.svg"
                alt="Step 2"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  On the add new connections form, add the following details:
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000",textTransform:'capitalize'}}>
                    Connection Number:
                  </span>
                 <p style={{textTransform:'capitalize'}}> 5487774000</p>
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000", textTransform:'capitalize' }}>
                    Utility Company:
                  </span>
                 <p style={{textTransform:'capitalize'}}> Bangalore Electricity Supply Ltd</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000", textTransform:'capitalize' }}>
                    Verification Method:{" "}
                  </span>{" "}
                  Registered Mobile Number
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Then <span style={{ fontWeight: "bold", color: "#000" }}>click on </span> add, enter the 6 digit random OTP to add the
                  connection to your wallet. Once added <span style={{ fontWeight: "bold", color: "#000" }}>click on </span> back button on
                  list screen to return to home screen.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 3
              </h3>
              <img
                src="/assets/step3.svg"
                alt="Step 3"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Now{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  energy assets, then <span style={{ fontWeight: "bold", color: "#000" }}> click on </span> my credentials, then
                </p>            
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  add new. on the add new credential form, add the following
                  details:
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    credential type:
                  </span>
                 <p> document</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    document name:
                  </span>{" "}
                  <p>solar panel ownership certificate</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    upload file:
                  </span>
                 <p> upload a file which is less than 1 mb.</p>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  add, once added{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  back button on list screen to return to energy assets screen.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 4
              </h3>
              <img
                src="/assets/step4.svg"
                alt="Step 4"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Now{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  physical assets, then{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  add new. on the add new asset form, add the following details:
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    type:
                  </span>
                 <p> battery</p>
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    upload file:
                  </span>
                 <p> upload a file which is less than 1 mb.</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  add, once added{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  back button on list screen to return to energy assets screen
                </p>
                <p style={{paddingTop:'10px'}}>
                  Again{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  back to return to home screen.
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 5
              </h3>
              <img
                src="/assets/step5.svg"
                alt="Step 5"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                Now   <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  profile icon and then logout from vault application </p>
                <p>
                 
                and <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  spark application from the landing screen and sign up for the
                  application using following credentials: </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    name:
                  </span>
                 <p> ravi prakash</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    email id:
                  </span>
                 <p> ravi.prakash@gmail.com</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    address:
                  </span>
                 <p> 1202 b2, bengaluru urban, bengaluru, karnataka</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p> 9999988888</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  sign up to continue </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 6
              </h3>
              <img
                src="/assets/step6.svg"
                alt="Step 6"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>Enter random 6 digit number as otp: 123456</p>
                <p>to verify your mobile number</p>
                <p style={{ paddingTop: "10px" }}>
                  On the landing page,
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on 
                  </span> 'connect my wallet' on top navigation and
                  <span style={{ fontWeight: "bold", color: "#000" }}>  select   </span>
                  vault app.
                </p>
                <p style={{ paddingTop: "10px" }}>  
                Now sign in to wallet using your  <span style={{ fontWeight: "bold", color: "#000" }}>
                    vault id:
                  </span> /subj****8888  </p>
                  
               
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> link to proceed and then   <span style={{ fontWeight: "bold", color: "#000" }}>
                    enter 6 digit otp: 
                  </span> 123456 to verify your login.  
                </p>
                <p style={{ paddingTop: "10px" }}>
                  On the alert pop-up select all the options and{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> confirm 
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 7
              </h3>
              <img
                src="/assets/step7.svg"
                alt="Step 7"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Now on the landing screen{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select
                  </span> marketplace
              
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    search
                  </span> for battery and from the results screen <span style={{ fontWeight: "bold", color: "#000" }}> 
                     select
                  </span> the luminous optimus 4500 4 kva battery from luminous               
                
                </p>
                <p style={{ paddingTop: "20px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select
                  </span>  quantity as 1 and then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> add to cart, then go to cart by clicking on cart icon from top
                  right corner of the application, inside cart click on  <span style={{ fontWeight: "bold", color: "#000" }}>
                    proceed
                  </span>
                 
                </p>
                <p style={{ paddingTop: "20px" }}>
                  
                Now <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  add shipping details.
                  </p>
                 
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 8
              </h3>
              <img
                src="/assets/step8.svg"
                alt="Step 8"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>Add following on shipping details form:</p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    name:
                  </span>
                 <p> ravi prakash</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p> 9999988888</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    email id:
                  </span>
                 <p> ravi.prakash@gmail.com</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    address:
                  </span>
                 <p> 1202 b2, bengaluru urban, bengaluru, karnataka</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    zip code:
                  </span>
                <p> 560078</p>
                </p>
                <p>
                Then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  save shipping details, then  <span style={{ fontWeight: "bold", color: "#000" }}>
                    check
                  </span>  the box to save billing details same as shipping details, then
                 
                 
                 
                  <span style={{ fontWeight: "bold", color: "#000" }}> click on
                   </span> proceed
                  </p>          
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 9
              </h3>
              <img
                src="/assets/step9.svg"
                alt="Step 9"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Now on the checkout screen opt in the emi section  <span style={{ fontWeight: "bold", color: "#000" }}>
                  open dropdown  </span> 
                  from bajaj finserv and   <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>    sync now to get better interest rates
                  </p>
                <p style={{ paddingTop: "10px" }}>
                  After syncing  <span style={{ fontWeight: "bold", color: "#000" }}>
                  select  </span>    bajaj finserv and   <span style={{ fontWeight: "bold", color: "#000" }}>
                 click on
               </span>  proceed
               </p>
                <p style={{ paddingTop: "10px" }}>
                  On the emi application form  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> sync wallet to fill the form
                  </p>
                  
                <p style={{ paddingTop: "10px" }}>
                  
                Then <span style={{ fontWeight: "bold", color: "#000" }}>
                    select
                  </span>  the loan tenure as 12 months and   <span style={{ fontWeight: "bold", color: "#000" }}>
                  click on </span>submit 
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 10
              </h3>
              <img
                src="/assets/step10.svg"
                alt="Step 10"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Once verified and approved, on the new checkout screen,{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  proceed to payment.
                  </p> 
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select
                  </span>  phone pe option from upi and <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> proceed
                  </p>        
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    enter 4 digit upi pin as:
                  </span>
                 <p> 1234</p>
                </p>
                <p style={{ paddingTop: "10px" }}>
                and <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  submit
                  </p>
                <p style={{ paddingTop: "5px" }}>
                  Your order will be placed and you will receive a confirmation
                </p>
                <p style={{ paddingTop: "5px" }}>
                  
                Now <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> view order details on order confirmation screen
                  </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 11
              </h3>
              <img
                src="/assets/step11.svg"
                alt="Step 11"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  In the order history screen{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> the order and in the order details screen <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>  add to wallet
                  </p>   
                <p style={{ paddingTop: "10px" }}>
                  To check the loan related details you can login to lend ease
                  application as a agent using following details:
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p> 7674955426</p>
                </p>
                <p>
                  Now you can check the loan application status for the
                  purchased battery
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
               
                  click on </span>  profile icon and then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> logout
                  </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 12
              </h3>
              <img
                src="/assets/step12.svg"
                alt="Step 12"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>
                  Now go to solaris application and sign in using the following
                  details:
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p> 9999988888</p>
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    otp:
                  </span>
                 <p> 123456</p>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on   </span>
                  sign in to continue
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 13
              </h3>
              <img
                src="/assets/step13.svg"
                alt="Step 13"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>
                  On the landing screen   <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on   </span>  provide rental services
                    </p>
                <p style={{ paddingTop: "10px" }}>
                  Then on the pop-up  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on   </span>
                  add from wallet
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select
                  </span>{" "}
                  the battery with source as spark and then click on next
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    date:
                  </span>
                 <p> select desired date</p>
                </p>
                <p >
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    time:
                  </span>
                 <p> 7:00 pm - 10:00 pm</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    price:
                  </span>
                 <p> 100 rs. per hour</p>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on </span>
                  submit and publish
                </p>

              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 14
              </h3>
              <img
                src="/assets/step14.svg"
                alt="Step 14"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "20px" }}>
                  Now go back to the spark app and sign in as new user using the
                  following details:
                </p>
                <p style={{ paddingBottom: "20px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p> 9999977777</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    otp:
                  </span>
                 <p> 123456</p>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span>{" "}
                  sign in to continue
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 15
              </h3>
              <img
                src="/assets/step15.svg"
                alt="Step 15"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "10px" }}>Enter random 6 digit number as otp: 123456  to verify your mobile number</p>
              
                <p>
                  On the landing page, <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> connect my wallet' on top navigation and  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select </span> vault app.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Now sign in to wallet using your  <span style={{ fontWeight: "bold", color: "#000" }}>
                    vault id: </span>  /subj****7777
                    </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on   </span>  link to proceed and then <span style={{ fontWeight: "bold", color: "#000" }}>
                    enter 6 digit otp:  </span>
                  123456 to verify your login.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  On the alert pop-up select all the options and{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on   </span>
                  confirm
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 16
              </h3>
              <img
                src="/assets/step16.svg"
                alt="Step 16"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "8px" }}>
                  On the landing screen  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select </span>
                  battery rental
                </p>

                <p style={{ paddingBottom: "8px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    search  </span> for battery rental
                 </p>
                <p>
                  From search results <span style={{ fontWeight: "bold", color: "#000" }}>
                    select </span>
                  ravi prakash's flour mill
                </p>

                <p style={{ paddingTop: "10px" }}>
                  On the product details screen <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on </span>proceed
                </p>               
               <p style={{ paddingBottom: "10px" }}>select the following:</p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    date:
                  </span>
                  <p> select the date used in step 13</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    time:
                  </span>
                 <p> 8:00 pm - 9:00 pm</p>
                </p>
                <p>
                  then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on </span>  confirm & proceed
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 17
              </h3>
              <img
                src="/assets/step17.svg"
                alt="Step 17"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p>Click on add billing details form:</p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    name:
                  </span>
                 <p> faiz</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    mobile number:
                  </span>
                 <p>9999977777</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    email id:
                  </span>
                 <p> faiz@gmail.com</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    address:
                  </span>
                 <p> 1202 b2, bengaluru urban, bengaluru, karnataka</p>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    zip code:
                  </span>
                 <p> 560078</p>
                </p>
                <p>
                then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on  </span>  save billing details, then <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on  </span>  proceed
                </p>
              </div>
            </>
            <>
              <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                Step 18
              </h3>
              <img
                src="/assets/step18.svg"
                alt="Step 18"
                style={imageStyle}
              />
              <div className="text_wrapper_modal">
                <p style={{ paddingBottom: "8px" }}>
                  On the checkout screen,  <span style={{ fontWeight: "bold", color: "#000" }}>
                  click on </span> proceed to payment.
                </p>
                 
                <p style={{ paddingBottom: "8px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    select </span> phone pe option from upi and{" "}
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on </span>  proceed
                </p>
                
                <p style={{ paddingBottom: "8px" }}>
                  <span style={{ fontWeight: "bold", color: "#000" }}>
                    enter 4 digit upi pin as:
                  </span>
                 <p> 1234</p>
                </p>
                <p style={{ paddingBottom: "8px" }}>
                  and <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on </span>    submit
                </p>
                
                <p style={{ paddingBottom: "8px" }}>
                  Your order will be placed and you will receive a confirmation
                </p>
                <p>
                  Now   <span style={{ fontWeight: "bold", color: "#000" }}>
                    click on
                  </span> view my rentals on order confirmation screen
                </p>
              </div>
            </>
          </ModalSlider>
        </div>
      </div>
    </>
  );
};

export default OpenSparkIframe;
