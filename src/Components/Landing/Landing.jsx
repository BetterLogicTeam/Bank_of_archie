import React, { useEffect, useState } from "react";
import "./Landing.css";
import logo from "../../Assets/logo.png";
import swap from "../../Assets/swap.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { loadWeb3 } from "../apis/api";
import {
  swapContract,
  swapContract_ABI,
  token_adress,
  token_abi,
  arceContract,
  arceContractAbi,
  arcvContractAbi,
  arcvContract,
  busdContractAbi,
  busdContract,
  arcrContract,
  arcmContract,
  arcrContractAbi,
  arcmContractAbi,
} from "../utilies/Contract";
import WalletModal from "../wallet_modal/WalletModal";
import { useDispatch, useSelector } from "react-redux";
import {disconnectWallet} from "../../store/actions/logout"


//

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <span className="sc-eCbnUT dUrPfY">
          <div className="sc-eEVmNe ceRJCx" style={{ padding: "1rem" }}>
            <div className="css-18hn7mq">Transaction Settings</div>
            <div className="sc-eEVmNe ceRJCx">
              <div className="sc-eEVmNe jpVwse">
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                    Slippage tolerance
                  </div>
                  <span style={{ marginLeft: "4px" }}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">
                    0.1%
                  </button>
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs kxYBWW">
                    0.5%
                  </button>
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">
                    1%
                  </button>
                  <button
                    tabindex="-1"
                    className="sc-jYKCQm sc-dHMioH bCZoQs foCclh"
                  >
                    <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                      <input
                        placeholder="0.50"
                        color=""
                        className="sc-jVSGNQ HfXha"
                        value=""
                      />
                      %
                    </div>
                  </button>
                </div>
              </div>
              <div className="sc-eEVmNe jpVwse">
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt wedth fzUdiI fHYJrX ipgglb">
                  <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                    Transaction deadline
                  </div>
                  <span style={{ marginLeft: "4px" }}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <button
                    tabindex="-1"
                    className="wedth sc-jYKCQm sc-dHMioH bCZoQs foCclh"
                    style={{ width: "80px" }}
                  >
                    <input
                      placeholder="20"
                      className="sc-jVSGNQ HfXha"
                      value=""
                    />
                  </button>
                  <div
                    className="sc-jJMGnK iJQSkR css-1ecm0so"
                    style={{ paddingLeft: "8px" }}
                  >
                    minutes
                  </div>
                </div>
              </div>
            </div>
            <div className="css-18hn7mq">Interface Settings</div>
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                  Toggle Expert Mode
                </div>
                <span style={{ marginLeft: "4px" }}>
                  <div className="sc-irKDMX cwoGFd">
                    <div className="sc-dvUynV dKBgpN">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
              <button
                id="toggle-expert-mode-button"
                className="sc-bA-DTon lcOYlI"
              >
                <span className="sc-kGVuwA lgWYGM">On</span>
                <span className="sc-kGVuwA bwBmjj">Off</span>
              </button>
            </div>
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                  Disable Multihops
                </div>
                <span style={{ marginLeft: "4px" }}>
                  <div className="sc-irKDMX cwoGFd">
                    <div className="sc-dvUynV dKBgpN">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
              <button
                id="toggle-disable-multihop-button"
                className="sc-bA-DTon lcOYlI"
              >
                <span className="sc-kGVuwA lgWYGM">On</span>
                <span className="sc-kGVuwA bwBmjj">Off</span>
              </button>
            </div>
          </div>
        </span>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <span className="sc-eCbnUT dUrPfY">
          <div className="sc-eEVmNe ceRJCx" style={{ padding: "1rem" }}>
            <div className="css-18hn7mq">Transaction Settings</div>
            <div className="sc-eEVmNe ceRJCx">
              <div className="sc-eEVmNe jpVwse">
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                    Slippage tolerance
                  </div>
                  <span style={{ marginLeft: "4px" }}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">
                    0.1%
                  </button>
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs kxYBWW">
                    0.5%
                  </button>
                  <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">
                    1%
                  </button>
                  <button
                    tabindex="-1"
                    className="sc-jYKCQm sc-dHMioH bCZoQs foCclh"
                  >
                    <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                      <input
                        placeholder="0.50"
                        color=""
                        className="sc-jVSGNQ HfXha"
                        value=""
                      />
                      %
                    </div>
                  </button>
                </div>
              </div>
              <div className="sc-eEVmNe jpVwse">
                <div className="wedth sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                    Transaction deadline
                  </div>
                  <span style={{ marginLeft: "4px" }}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <button
                    tabindex="-1"
                    className="sc-jYKCQm sc-dHMioH bCZoQs foCclh"
                    style={{ width: "80px" }}
                  >
                    <input
                      placeholder="20"
                      className="sc-jVSGNQ HfXha"
                      value=""
                    />
                  </button>
                  <div
                    className="sc-jJMGnK iJQSkR css-1ecm0so"
                    style={{ paddingLeft: "8px" }}
                  >
                    minutes
                  </div>
                </div>
              </div>
            </div>
            <div className="css-18hn7mq">Interface Settings</div>
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                  Toggle Expert Mode
                </div>
                <span style={{ marginLeft: "4px" }}>
                  <div className="sc-irKDMX cwoGFd">
                    <div className="sc-dvUynV dKBgpN">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
              <button
                id="toggle-expert-mode-button"
                className="sc-bA-DTon lcOYlI"
              >
                <span className="sc-kGVuwA lgWYGM">On</span>
                <span className="sc-kGVuwA bwBmjj">Off</span>
              </button>
            </div>
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                <div className="sc-jJMGnK bXUIQO css-1pnt2fu">
                  Disable Multihops
                </div>
                <span style={{ marginLeft: "4px" }}>
                  <div className="sc-irKDMX cwoGFd">
                    <div className="sc-dvUynV dKBgpN">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
              <button
                id="toggle-disable-multihop-button"
                className="sc-bA-DTon lcOYlI"
              >
                <span className="sc-kGVuwA lgWYGM">On</span>
                <span className="sc-kGVuwA bwBmjj">Off</span>
              </button>
            </div>
          </div>
        </span>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="sc-eEVmNe sc-fyjqAk ceRHWJ dtoRLS">
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="css-xy7yfl">Select a token</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{ flex: "1 1 0%" }}>
          <div className="self">
            <div style={{ height: "112px", width: "100%" }}>
              <div
                className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr"
                disabled=""
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img src={swap} className="sc-kizEQm qRAyn" />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelOne("ARC");
                    props.onHide();
                  }}
                >
                  <div title="ARC" className="css-8mokm4 dark">
                    ARC
                  </div>
                  <div className="sc-jJMGnK light hCiMzG css-165qfk5">ARC </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
              <div
                className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "56px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img
                  className="me-3 sc-cKRKFl cwJYNm"
                  alt="WARC logo"
                  src={swap}
                />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelOne("WARC");
                    props.onHide();
                  }}
                >
                  <div title="Wrapped ARC" className="css-8mokm4 dark">
                    WARC
                  </div>
                  <div className="d-flex light">
                    <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                      Wrapped{" "}
                    </span>
                    <span>ARC</span>
                  </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function MyVerticallyCenteredModal2Copy(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="sc-eEVmNe sc-fyjqAk ceRHWJ dtoRLS">
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="css-xy7yfl">Select a token</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{ flex: "1 1 0%" }}>
          <div className="self">
            <div style={{ height: "112px", width: "100%" }}>
              <div
                className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr"
                disabled=""
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img src={swap} className="sc-kizEQm qRAyn" />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModeltwocopy("ARC");
                    props.onHide();
                  }}
                >
                  <div title="ARC" className="css-8mokm4 dark">
                    ARC
                  </div>
                  <div className="sc-jJMGnK light hCiMzG css-165qfk5">ARC </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
              <div
                className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "56px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img
                  className="me-3 sc-cKRKFl cwJYNm"
                  alt="WARC logo"
                  src={swap}
                />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModeltwocopy("WARC");
                    props.onHide();
                  }}
                >
                  <div title="Wrapped ARC" className="css-8mokm4 dark">
                    WARC
                  </div>
                  <div className="d-flex light">
                    <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                      Wrapped{" "}
                    </span>
                    <span>ARC</span>
                  </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="sc-eEVmNe sc-fyjqAk ceRHWJ dtoRLS">
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="css-xy7yfl">Select a token</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{ flex: "1 1 0%" }}>
          <div className="self">
            <div style={{ height: "112px", width: "100%" }}>
              <div
                className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr"
                disabled=""
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img src={swap} className="sc-kizEQm qRAyn" />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelTwo("$ARCE");
                    props.onHide();
                  }}
                >
                  <div title="ARC" className="css-8mokm4 dark">
                    $ARCE
                  </div>
                  <div className="d-flex light">
                    <span className="sc-jJMGnK light hCiMzG css-165qfk5">
                      Everest{" "}
                    </span>
                    <span>Cash</span>
                  </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
              <div
                className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "56px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img
                  className="me-3 sc-cKRKFl cwJYNm"
                  alt="WARC logo"
                  src={swap}
                />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelTwo("$ARCV");
                    props.onHide();
                  }}
                >
                  <div title="Wrapped ARC" className="css-8mokm4 dark">
                    $ARCV
                  </div>
                  <div className="d-flex light">
                    <span className="sc-jJMGnK light hCiMzG css-165qfk5">
                      Venus{" "}
                    </span>
                    <span>Cash</span>
                  </div>
                </div>

                <div
                  className="hooveer paddig sc-bdnxRM self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "56px",
                    height: "56px",
                    width: "100%",
                  }}
                >
                  <img
                    className="me-3 sc-cKRKFl cwJYNm"
                    alt="WARC logo"
                    src={swap}
                  />
                  <div
                    className="sc-EZqKI iONckA"
                    onClick={() => {
                      props.setModelTwo("$ARCR");
                      props.onHide();
                    }}
                  >
                    <div title="Wrapped ARC" className="css-8mokm4 dark">
                      $ARCR
                    </div>
                    <div className="d-flex light">
                      <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                        Royal{" "}
                      </span>
                      <span> Archie </span>
                      <span> Cash</span>
                    </div>
                  </div>
                  <span></span>
                  <div
                    className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                    style={{ justifySelf: "flex-end" }}
                  ></div>
                </div>

                <div
                  className="hooveer paddig sc-bdnxRM mt-6 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "56px",
                    height: "56px",
                    width: "100%",
                  }}
                >
                  <img
                    className="me-3 sc-cKRKFl cwJYNm"
                    alt="WARC logo"
                    src={swap}
                  />
                  <div
                    className="sc-EZqKI iONckA"
                    onClick={() => {
                      props.setModelTwo("$ARCM");
                      props.onHide();
                    }}
                  >
                    <div title="Wrapped ARC" className="css-8mokm4 dark">
                      $ARCM
                    </div>
                    <div className="d-flex light">
                      <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                        Meta{" "}
                      </span>
                      <span> Cash </span>
                    </div>
                  </div>
                  <span></span>
                  <div
                    className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                    style={{ justifySelf: "flex-end" }}
                  ></div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal3Copy(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="sc-eEVmNe sc-fyjqAk ceRHWJ dtoRLS">
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="css-xy7yfl">Select a token</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{ flex: "1 1 0%" }}>
          <div className="self">
            <div style={{ height: "112px", width: "100%" }}>
              <div
                className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr"
                disabled=""
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img src={swap} className="sc-kizEQm qRAyn" />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelthreecopy("$ARCE");
                    props.onHide();
                  }}
                >
                  <div title="ARC" className="css-8mokm4 dark">
                    $ARCE
                  </div>
                  <div className="d-flex light">
                    <span className="sc-jJMGnK light hCiMzG css-165qfk5">
                      Everest{" "}
                    </span>
                    <span>Cash</span>
                  </div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
              <div
                className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "56px",
                  height: "56px",
                  width: "100%",
                }}
              >
                <img
                  className="me-3 sc-cKRKFl cwJYNm"
                  alt="WARC logo"
                  src={swap}
                />
                <div
                  className="sc-EZqKI iONckA"
                  onClick={() => {
                    props.setModelthreecopy("$ARCV");
                    props.onHide();
                  }}
                >
                  <div title="Wrapped ARC" className="css-8mokm4 dark">
                    $ARCV
                  </div>
                  <div className="d-flex light">
                    <span className="sc-jJMGnK light hCiMzG css-165qfk5">
                      Venus{" "}
                    </span>
                    <span>Cash</span>
                  </div>
                </div>

                <div
                  className="hooveer paddig sc-bdnxRM self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "56px",
                    height: "56px",
                    width: "100%",
                  }}
                >
                  <img
                    className="me-3 sc-cKRKFl cwJYNm"
                    alt="WARC logo"
                    src={swap}
                  />
                  <div
                    className="sc-EZqKI iONckA"
                    onClick={() => {
                      props.setModelthreecopy("$ARCR");
                      props.onHide();
                    }}
                  >
                    <div title="Wrapped ARC" className="css-8mokm4 dark">
                      $ARCR
                    </div>
                    <div className="d-flex light">
                      <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                        Royal{" "}
                      </span>
                      <span> Archie </span>
                      <span> Cash</span>
                    </div>
                  </div>
                  <span></span>
                  <div
                    className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                    style={{ justifySelf: "flex-end" }}
                  ></div>
                </div>

                <div
                  className="hooveer paddig sc-bdnxRM mt-6 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4"
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "56px",
                    height: "56px",
                    width: "100%",
                  }}
                >
                  <img
                    className="me-3 sc-cKRKFl cwJYNm"
                    alt="WARC logo"
                    src={swap}
                  />
                  <div
                    className="sc-EZqKI iONckA"
                    onClick={() => {
                      props.setModelthreecopy("$ARCM");
                      props.onHide();
                    }}
                  >
                    <div title="Wrapped ARC" className="css-8mokm4 dark">
                      $ARCM
                    </div>
                    <div className="d-flex light">
                      <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">
                        Meta{" "}
                      </span>
                      <span> Cash </span>
                    </div>
                  </div>
                  <span></span>
                  <div
                    className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                    style={{ justifySelf: "flex-end" }}
                  ></div>
                </div>
                <span></span>
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb"
                  style={{ justifySelf: "flex-end" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Landing() {
  let { provider, acc, providerType, web3 } = useSelector(state => state.connectWallet);  
  const dispatch = useDispatch()

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow2copy, setModalShow2copy] = React.useState(false);
  const [modalShow5, setModalShow5] = useState(false);

  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow3copy, setModalShow3copy] = React.useState(false);

  const [modalShow4, setModalShow4] = React.useState(false);
  const [value1, setValue1] = React.useState(false);
  const [flag, setfalag] = React.useState(true);

  const [theme, setTheme] = useState("light_theme");
  const [iaDark, setIaDark] = useState(false);
  const [BtTxt, setBtTxt] = useState("Connect");
  const [modelOne, setModelOne] = useState("ARC");
  const [modelthreecopy, setModelthreecopy] = useState("$ARCE");
  const [modeltowcopy, setModeltwocopy] = useState("ARC");

  const [modelTwo, setModelTwo] = useState("$ARCE");
  const [bnbtotoken, setbnbtotoken] = useState("");
  // const [acc, setAcc] = useState("");
  const [tokenValue, setTokenValue] = useState("");
  const [busdBalace, setBusdBalance] = useState("");
  const [tokentobusd, settokentobusd] = useState("");
  const [bnbvalue, setbnbvalue] = useState("");
  const [userbalance, setuserbalance] = useState("");
  const [tokenBalance, settokenBalance] = useState("");
  const [tokenBalancecOPY, settokenBalanceCopy] = useState("");

  const getMaxToken = async () => {};
  const getMaxBnb = async () => {
    setbnbtotoken(busdBalace);
  };


  
  const showModal = () => { setModalShow5(true) }
  const closeModal = () => { setModalShow5(false) }

  useEffect(() => {
    // alert(acc)
    if (acc != null) {
      // setcontset(true)
      setBtTxt(acc?.substring(0, 4) +
        "..." +
        acc?.substring(acc?.length - 4))
        getaccount()
      closeModal();
    }
  }, [acc]);
  const diconnectWallet = async () => {
    if (providerType == 1) {
      await provider.disconnect();
    }
    dispatch(disconnectWallet());
    setBtTxt("Connect")
    // setcontset(false)
  }
  const tokentobnb = async () => {
    // alert(modelthreecopy)
    if (modelthreecopy == "$ARCE") {
      const web3 = window.web3;

      let amount = web3.utils.toWei(tokentobusd.toString());
      let arcetoBUSD = new web3.eth.Contract(swapContract_ABI, swapContract);
      let arcecon = new web3.eth.Contract(arceContractAbi, arceContract);
      await arcecon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await arcetoBUSD.methods
        .swapTokenToBusd(amount, busdContract, arceContract)
        .send({
          from: acc,
        });
    } else if (modelthreecopy == "$ARCV") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(tokentobusd.toString());

      let arcvtobusd = new web3.eth.Contract(swapContract_ABI, swapContract);
      let arcvcon = new web3.eth.Contract(arcvContractAbi, arcvContract);
      await arcvcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await arcvtobusd.methods
        .swapTokenToBusd(amount, busdContract, arcvContract)
        .send({ from: acc });
    } else if (modelthreecopy == "$ARCR") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(tokentobusd.toString());

      let arcrtobusd = new web3.eth.Contract(swapContract_ABI, swapContract);
      let arcrcon = new web3.eth.Contract(arcrContractAbi, arcrContract);
      await arcrcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await arcrtobusd.methods
        .swapTokenToBusd(amount, busdContract, arcrContract)
        .send({ from: acc });
    } else if (modelthreecopy == "$ARCM") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(tokentobusd.toString());

      let arcmtobusd = new web3.eth.Contract(swapContract_ABI, swapContract);
      let arcmcon = new web3.eth.Contract(arcmContractAbi, arcmContract);
      await arcmcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await arcmtobusd.methods
        .swapTokenToBusd(amount, busdContract, arcmContract)
        .send({ from: acc });
    }
  };

  const swap = async () => {
    if (modelTwo == "$ARCE") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(bnbtotoken.toString());
      // const approveBlock = window.web3.eth.getBlock("latest");

      let busdtoarce = new web3.eth.Contract(swapContract_ABI, swapContract);
      let busdcon = new web3.eth.Contract(busdContractAbi, busdContract);
      await busdcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await busdtoarce.methods
        .swapBusdTotoken(amount, busdContract, arceContract)
        .send({
          from: acc,
          // gasLimit: approveBlock.gasLimit,
          // gasPrice: await window.web3.eth.getGasPrice()
        });
    } else if (modelTwo == "$ARCV") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(bnbtotoken.toString());

      let busdtoarcv = new web3.eth.Contract(swapContract_ABI, swapContract);
      let busdcon = new web3.eth.Contract(busdContractAbi, busdContract);
      await busdcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await busdtoarcv.methods
        .swapBusdTotoken(amount, busdContract, arcvContract)
        .send({ from: acc });
    } else if (modelTwo == "$ARCR") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(bnbtotoken.toString());

      let busdtoarcr = new web3.eth.Contract(swapContract_ABI, swapContract);
      let busdcon = new web3.eth.Contract(busdContractAbi, busdContract);
      await busdcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let convertedValue = await busdtoarcr.methods
        .swapBusdTotoken(amount, busdContract, arcrContract)
        .send({ from: acc });
    } else if (modelTwo == "$ARCM") {
      const web3 = window.web3;
      let amount = web3.utils.toWei(bnbtotoken.toString());
      let busdcon = new web3.eth.Contract(busdContractAbi, busdContract);
      await busdcon.methods.approve(swapContract, amount).send({
        from: acc,
      });
      let busdtoarcm = new web3.eth.Contract(swapContract_ABI, swapContract);

      let convertedValue = await busdtoarcm.methods
        .swapBusdTotoken(amount, busdContract, arcmContract)
        .send({ from: acc });
    }
  };
  const bnbtoToken = async (e) => {
    setbnbtotoken(e.target.value);

    const web3 = window.web3;
    let amount = web3.utils.toWei(e.target.value);

    let busdtoarce = new web3.eth.Contract(swapContract_ABI, swapContract);

    let convertedValue = await busdtoarce.methods
      .check_tokenValue(amount)
      .call();
    let value_after = web3.utils.fromWei(convertedValue);
    setTokenValue(value_after);
  };
  const tokentoBnb = async (e) => {
    settokentobusd(e.target.value);

    const web3 = window.web3;
    let amount = web3.utils.toWei(e.target.value);

    let busdtoarce = new web3.eth.Contract(swapContract_ABI, swapContract);

    let convertedValue = await busdtoarce.methods
      .check_tokenValue(amount)
      .call();
    let value_after = web3.utils.fromWei(convertedValue);
    setbnbvalue(value_after);
  };

  const getaccount = async () => {
    // let acc = await loadWeb3();
    // if (acc == "No Wallet") {
    //   // toast.error('please install metamask')
    //   setBtTxt("please install metamask");
    // } else if (acc == "Wrong Network") {
    //   // toast.error('Wrong Network')
    //   setBtTxt("Wrong Network");
    // } else {
      

      // let myAcc =
      //   acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);

      // setBtTxt(myAcc);

      const web3 = window.web3;

      let busdAmount = new web3.eth.Contract(busdContractAbi, busdContract);

      busdAmount = await busdAmount.methods.balanceOf(acc).call();
      busdAmount = web3.utils.fromWei(busdAmount);
      busdAmount = Number(busdAmount).toFixed(0);
      setBusdBalance(busdAmount);

      if (modelTwo == "$ARCE") {
        const web3 = window.web3;

        let arceAmount = new web3.eth.Contract(arceContractAbi, arceContract);

        arceAmount = await arceAmount.methods.balanceOf(acc).call();
        arceAmount = web3.utils.fromWei(arceAmount);
        arceAmount = Number(arceAmount).toFixed(0);
        settokenBalance(arceAmount);
      } else if (modelTwo == "$ARCV") {
        const web3 = window.web3;

        let arcvAmount = new web3.eth.Contract(arcvContractAbi, arcvContract);

        arcvAmount = await arcvAmount.methods.balanceOf(acc).call();
        arcvAmount = web3.utils.fromWei(arcvAmount);
        arcvAmount = Number(arcvAmount).toFixed(0);
        settokenBalance(arcvAmount);
      } else if (modelTwo == "$ARCR") {
        const web3 = window.web3;

        let arcrAmount = new web3.eth.Contract(arcrContractAbi, arcrContract);

        arcrAmount = await arcrAmount.methods.balanceOf(acc).call();
        arcrAmount = web3.utils.fromWei(arcrAmount);
        arcrAmount = Number(arcrAmount).toFixed(0);
        settokenBalance(arcrAmount);
      } else if (modelTwo == "$ARCM") {
        const web3 = window.web3;

        let arcmAmount = new web3.eth.Contract(arcmContractAbi, arcmContract);

        arcmAmount = await arcmAmount.methods.balanceOf(acc).call();
        arcmAmount = web3.utils.fromWei(arcmAmount);
        arcmAmount = Number(arcmAmount).toFixed(0);
        settokenBalance(arcmAmount);
      }
      if (modelthreecopy == "$ARCE") {
        const web3 = window.web3;

        let arceAmount = new web3.eth.Contract(arceContractAbi, arceContract);

        arceAmount = await arceAmount.methods.balanceOf(acc).call();
        arceAmount = web3.utils.fromWei(arceAmount);
        arceAmount = Number(arceAmount).toFixed(0);
        settokenBalanceCopy(arceAmount);
      } else if (modelthreecopy == "$ARCV") {
        const web3 = window.web3;

        let arcvAmount = new web3.eth.Contract(arcvContractAbi, arcvContract);

        arcvAmount = await arcvAmount.methods.balanceOf(acc).call();
        arcvAmount = web3.utils.fromWei(arcvAmount);
        arcvAmount = Number(arcvAmount).toFixed(0);
        settokenBalanceCopy(arcvAmount);
      } else if (modelthreecopy == "$ARCR") {
        const web3 = window.web3;

        let arcrAmount = new web3.eth.Contract(arcrContractAbi, arcrContract);

        arcrAmount = await arcrAmount.methods.balanceOf(acc).call();
        arcrAmount = web3.utils.fromWei(arcrAmount);
        arcrAmount = Number(arcrAmount).toFixed(0);
        settokenBalanceCopy(arcrAmount);
      } else if (modelthreecopy == "$ARCM") {
        const web3 = window.web3;

        let arcmAmount = new web3.eth.Contract(arcmContractAbi, arcmContract);

        arcmAmount = await arcmAmount.methods.balanceOf(acc).call();
        arcmAmount = web3.utils.fromWei(arcmAmount);
        arcmAmount = Number(arcmAmount).toFixed(0);
        settokenBalanceCopy(arcmAmount);
      }
    // }
  };

  // useEffect(() => {
   
  //   getaccount();
  // });

  const toggleTheme = () => {
    if (theme === "dark_theme") {
      setTheme("light_theme");
      setIaDark(!iaDark);
    } else {
      setTheme("dark_theme");
      setIaDark(!iaDark);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className="maain">
      <WalletModal show={modalShow5} onHide={closeModal} />

      <div className="sc-fJxALz eFbGYe">
        <div className="sc-bsatvv jnCyRr">
          <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt sc-dtLLSn fzUdiI fHYJrX ipgglb fTfOsi">
            <a href="." className="sc-eHEENL hTVbYg">
              <div className="sc-hzUIXc jSTRnN">
                <img width="350px" src={logo} alt="logo" />
              </div>
            </a>
          </div>
          <div className="sc-bdnxRM swapp sc-gKAaRy sc-dkQUaI fzUdiI fHYJrX eFlXSC">
            <span className="bggg">
              <a
                className="sc-xGAEC giFUhe ACTIVE"
                id="swap-nav-link"
                href="#/swap"
                aria-current="page"
              >
                Swap
              </a>
            </span>
          </div>
          <div className="sc-gIvpjk dVRMhB">
            <div className="sc-euEtCV eRaVyv">
              <span className="sc-ikXwFM VYmft"></span>
              <div
                className="sc-WZYut fXnmVI"
                style={{ pointerEvents: "auto" }}
              >
                <button
                  id="connect-wallet"
                  className="sc-bdnxRM bhVlig sc-kEqXSa sc-crzoAE sc-GvhzO sc-bXexck hAmzBT hUdkEf kxlnZx cvtCNZ"
                  onClick={() => showModal()}
                >
                  <p className="sc-csTbgd wallet kglWtV">{BtTxt}</p>

                </button>
                {
                  BtTxt=="Connect" ?
                  <>
                  </>
                  :
                  
                <button
                  id="connect-wallet"
                  className="sc-bdnxRM bhVlig sc-kEqXSa sc-crzoAE sc-GvhzO sc-bXexck hAmzBT hUdkEf kxlnZx cvtCNZ ms-2"
                  onClick={() => diconnectWallet()}
                >
                  <p className="sc-csTbgd wallet kglWtV">DisConnect</p>

                </button>
                }
              </div>
            </div>
            <div className="sc-fHCHyC crlswz">
              <button
                className="sc-dWBRfb jeiBZJ"
                onClick={() => toggleTheme()}
              >
                {iaDark ? (
                  <>
                    <span className="fs-4">
                      <FiSun />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="fs-4">
                      <BsMoon />
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sc-cSiAOC exbPXw">
        <div className="sc-eEVmNe sc-gVFcvn ceRKqw kDyXxF"></div>
        <div height="0" className="sc-cbeScs kuDVIy">
          <div className="sc-hkeOVe cosZie"></div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://testnet.archiescan.io/block/1196244"
          className="sc-fKgJPI gOrrtT"
        >
          <div className="sc-jHcXXw jmFqgb">
            <div
              className="sc-jJMGnK bXUIQO css-x9zcw6"
              style={{ opacity: "0.3" }}
            >
              1196244
            </div>
            <div className="sc-bQCEYZ gBldzM"></div>
          </div>
        </a>
        <div
          className="sc-kBqmDu gGpzTx"
          style={{ marginBottom: "20px", display: "none" }}
        >
          <a
            aria-current="page"
            className="sc-gJjCVn FMDbw ACTIVE"
            id="swap-nav-link"
            href="#/swap"
          >
            Swap
          </a>
          <a className="sc-gJjCVn FMDbw" id="pool-nav-link" href="#/pool">
            Pool
          </a>
        </div>
        <div className="sc-hmvkKb DCgcf">
          <div className="sc-hWZktu fkNuDh">
            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
              <div className="sc-jJMGnK iJQSkR css-1kt4f20">Swap</div>
              <div className="sc-iuhXDa dBEucF">
                <button
                  id="open-settings-dialog-button"
                  className="sc-jcsPjo bUEpDn"
                >
                  <Button
                    variant=""
                    onClick={() => setModalShow(true)}
                  ></Button>
                </button>
              </div>
            </div>
          </div>
          <div id="swap-page" className="sc-juXuNZ KigMW">
            <div className="sc-eEVmNe ceRJCx">
              <div id="swap-currency-input" className="sc-geBCVM dqgKzp">
                {value1 == false ? (
                  <>
                    <div className="first sc-clGGWX dSShbu">
                      <div className="sc-fiCYzP ftghdH">
                        <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                          <div className="sc-jJMGnK bXUIQO css-1rhdhic">
                            From
                          </div>
                        </div>
                        <div className="">{busdBalace}</div>
                      </div>
                      <div className="sc-biHcxt jLSnqi">
                        <input
                          className="sc-ByBTK tIUQu token-amount-input"
                          value={bnbtotoken}
                          onChange={bnbtoToken}
                          title="Token Amount"
                          autocomplete="off"
                          autocorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0.0"
                          minlength="1"
                          maxlength="79"
                          spellcheck="false"
                        />
                        <button
                          className="max sc-hfVBHA cyFpBV open-currency-select-button"
                          onClick={getMaxBnb}
                        >
                          <span className="sc-lfRxJW hoeYaZ">MAX</span>
                        </button>
                        <button className="sc-hfVBHA cyFpBV open-currency-select-button">
                          <span className="sc-lfRxJW hoeYaZ">
                            <Button
                              variant=""
                              onClick={() => setModalShow2(true)}
                            >
                              <img src={swap} className="sc-kizEQm qRAyn" />
                              <span className="sc-kJNqyW dAolHO token-symbol-container">
                                {modelOne}
                              </span>
                              <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-hndLF eDmepi"
                              >
                                <path
                                  d="M0.97168 1L6.20532 6L11.439 1"
                                  stroke="#AEAEAE"
                                ></path>
                              </svg>
                            </Button>

                            <MyVerticallyCenteredModal2
                              show={modalShow2}
                              setModelOne={setModelOne}
                              onHide={() => setModalShow2(false)}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="exchange_arrow">
                      <div
                        className="sc-bdnxRM  my-3 sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI"
                        onClick={() => {
                          setValue1(true);
                          setfalag(!flag);
                        }}
                      >
                        <div className="move sc-ecQkzk ggFzum">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#565A69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="second sc-clGGWX dSShbu">
                      <div className="sc-fiCYzP ftghdH">
                        <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                          <div className="sc-jJMGnK bXUIQO css-1rhdhic">To</div>
                        </div>
                        <div className="">{tokenBalance}</div>
                      </div>
                      <div className="sc-biHcxt jLSnqi">
                        <input
                          className="sc-ByBTK tIUQu token-amount-input text-muted"
                          disabled
                          inputmode="decimal"
                          title="Token Amount"
                          autocomplete="off"
                          autocorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0.0"
                          minlength="1"
                          maxlength="79"
                          spellcheck="false"
                          value={tokenValue}
                        />
                        <button className="sc-hfVBHA cyFpBV open-currency-select-button">
                          <Button
                            variant=""
                            onClick={() => setModalShow3(true)}
                          >
                            <span className="sc-lfRxJW hoeYaZ">
                              <span className="sc-kJNqyW kEWqjy token-symbol-container">
                                {modelTwo}
                              </span>
                              <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-hndLF eDmepi"
                              >
                                <path
                                  d="M0.97168 1L6.20532 6L11.439 1"
                                  stroke="#AEAEAE"
                                ></path>
                              </svg>
                            </span>
                          </Button>

                          <MyVerticallyCenteredModal3
                            show={modalShow3}
                            onHide={() => setModalShow3(false)}
                            setModelTwo={setModelTwo}
                          />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="second sc-clGGWX dSShbu">
                      <div className="sc-fiCYzP ftghdH">
                        <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                          <div className="sc-jJMGnK bXUIQO css-1rhdhic">
                            From
                          </div>
                        </div>
                        <div className="">{tokenBalancecOPY}</div>
                      </div>
                      <div className="sc-biHcxt jLSnqi">
                        <input
                          className="sc-ByBTK tIUQu token-amount-input"
                          onChange={tokentoBnb}
                          inputmode="decimal"
                          title="Token Amount"
                          autocomplete="off"
                          autocorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0.0"
                          minlength="1"
                          maxlength="79"
                          spellcheck="false"
                          value={tokentobusd}
                        />
                        <button className="sc-hfVBHA cyFpBV open-currency-select-button">
                          <Button
                            variant=""
                            onClick={() => setModalShow3copy(true)}
                          >
                            <span className="sc-lfRxJW hoeYaZ">
                              <span className="sc-kJNqyW kEWqjy token-symbol-container">
                                {modelthreecopy}
                              </span>
                              <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-hndLF eDmepi"
                              >
                                <path
                                  d="M0.97168 1L6.20532 6L11.439 1"
                                  stroke="#AEAEAE"
                                ></path>
                              </svg>
                            </span>
                          </Button>

                          <MyVerticallyCenteredModal3Copy
                            setModelthreecopy={setModelthreecopy}
                            show={modalShow3copy}
                            onHide={() => setModalShow3copy(false)}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="exchange_arrow">
                      <div
                        className="sc-bdnxRM  my-3 sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI"
                        onClick={() => {
                          setValue1(false);
                          setfalag(!flag);
                        }}
                      >
                        <div className="move sc-ecQkzk ggFzum">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#565A69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="first sc-clGGWX dSShbu">
                      <div className="sc-fiCYzP ftghdH">
                        <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                          <div className="sc-jJMGnK bXUIQO css-1rhdhic">To</div>
                        </div>
                        <div className="">{busdBalace}</div>
                      </div>
                      <div className="sc-biHcxt jLSnqi">
                        <input
                          className="sc-ByBTK tIUQu token-amount-input text-muted"
                          disabled
                          inputmode="decimal"
                          title="Token Amount"
                          autocomplete="off"
                          autocorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0.0"
                          minlength="1"
                          maxlength="79"
                          spellcheck="false"
                          value={bnbvalue}
                        />
                        {/* <button className="max sc-hfVBHA cyFpBV open-currency-select-button" onClick={getMaxToken}><span className="sc-lfRxJW hoeYaZ">MAX</span></button> */}
                        <button className="sc-hfVBHA cyFpBV open-currency-select-button">
                          <span className="sc-lfRxJW hoeYaZ">
                            <Button
                              variant=""
                              onClick={() => setModalShow2copy(true)}
                            >
                              <img src={swap} className="sc-kizEQm qRAyn" />
                              <span className="sc-kJNqyW dAolHO token-symbol-container">
                                {modeltowcopy}
                              </span>
                              <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-hndLF eDmepi"
                              >
                                <path
                                  d="M0.97168 1L6.20532 6L11.439 1"
                                  stroke="#AEAEAE"
                                ></path>
                              </svg>
                            </Button>

                            <MyVerticallyCenteredModal2Copy
                              setModeltwocopy={setModeltwocopy}
                              show={modalShow2copy}
                              onHide={() => setModalShow2copy(false)}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="sc-eEVmNe kYKaHR">
                <div
                  className="sc-bdnxRM sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI"
                  style={{ padding: "0px 1rem" }}
                ></div>
              </div>
              <div id="swap-currency-output" className="sc-geBCVM dqgKzp"></div>
              <div className="sc-bdnxRM sc-dlnjwi imLKPM crWdTg">
                <div
                  className="sc-eEVmNe jpVwse"
                  style={{ padding: "3px 4px" }}
                >
                  <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                    <Button variant="" onClick={() => setModalShow(true)}>
                     
                    </Button>

                  </div>
                </div>
              </div>
            </div>
            <div className="sc-iXquSf bwRbQ">
              {flag == true ? (
                <>
                  <button
                    className="sc-bdnxRM bhVlig sc-kEqXSa sc-iqAclL hAmzBT iSuonF"
                    onClick={swap}
                  >
                    Swap
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="sc-bdnxRM bhVlig sc-kEqXSa sc-iqAclL hAmzBT iSuonF"
                    onClick={tokentobnb}
                  >
                    swap
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
