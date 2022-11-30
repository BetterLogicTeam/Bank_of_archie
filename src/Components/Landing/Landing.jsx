import React, { useEffect, useState } from 'react';
import "./Landing.css";
import logo from '../../Assets/logo.png';
import swap from '../../Assets/swap.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton> */}
        {/* </Modal.Header> */}
        <Modal.Body>
          <span className="sc-eCbnUT dUrPfY">
            <div className="sc-eEVmNe ceRJCx" style={{padding: "1rem"}}>
            <div className="css-18hn7mq">Transaction Settings</div>
            <div className="sc-eEVmNe ceRJCx">
              <div className="sc-eEVmNe jpVwse">
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Slippage tolerance</div>
                  <span style={{marginLeft: "4px"}}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                           </svg>
                            </div>
                             </div>
                              </span>
                               </div>
                          <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">0.1%</button>
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs kxYBWW">0.5%</button>
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">1%</button>
                            <button tabindex="-1" className="sc-jYKCQm sc-dHMioH bCZoQs foCclh">
                              <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                                <input placeholder="0.50" color="" className="sc-jVSGNQ HfXha" value=""/>%</div>
                                </button>
                                </div>
                                </div>
                                <div className="sc-eEVmNe jpVwse">
                                  <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt wedth fzUdiI fHYJrX ipgglb">
                                    <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Transaction deadline</div>
                                    <span style={{marginLeft: "4px"}}>
                                      <div className="sc-irKDMX cwoGFd">
                                        <div className="sc-dvUynV dKBgpN">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                 </svg>
                  </div>
                   </div>
                    </span>
                     </div>
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                  <button tabindex="-1" className="wedth sc-jYKCQm sc-dHMioH bCZoQs foCclh" style={{width: "80px"}}>
                    <input placeholder="20" className="sc-jVSGNQ HfXha" value=""/>
                    </button>
                    <div className="sc-jJMGnK iJQSkR css-1ecm0so" style={{paddingLeft: "8px"}}>minutes</div>
                     </div>
                      </div>
                       </div>
                    <div className="css-18hn7mq">Interface Settings</div>
                    <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                      <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                        <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Toggle Expert Mode</div>
                        <span style={{marginLeft: "4px"}}>
                <div className="sc-irKDMX cwoGFd">
                  <div className="sc-dvUynV dKBgpN">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                       </svg>
                        </div>
                         </div>
                          </span>
                           </div>
                      <button id="toggle-expert-mode-button" className="sc-bA-DTon lcOYlI">
                        <span className="sc-kGVuwA lgWYGM">On</span>
                        <span className="sc-kGVuwA bwBmjj">Off</span>
                        </button>
                        </div>
                        <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                          <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                            <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Disable Multihops</div>
                            <span style={{marginLeft: "4px"}}>
                              <div className="sc-irKDMX cwoGFd">
              <div className="sc-dvUynV dKBgpN">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                   </svg>
                    </div>
                     </div>
                      </span>
                  </div>
                  <button id="toggle-disable-multihop-button" className="sc-bA-DTon lcOYlI">
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
        {/* <Modal.Header closeButton> */}
        {/* </Modal.Header> */}
        <Modal.Body>
          <span className="sc-eCbnUT dUrPfY">
            <div className="sc-eEVmNe ceRJCx" style={{padding: "1rem"}}>
              <div className="css-18hn7mq">Transaction Settings</div>
              <div className="sc-eEVmNe ceRJCx">
                <div className="sc-eEVmNe jpVwse">
                  <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                    <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Slippage tolerance</div>
                    <span style={{marginLeft: "4px"}}>
                    <div className="sc-irKDMX cwoGFd">
                      <div className="sc-dvUynV dKBgpN">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                           </svg>
                            </div>
                             </div>
                              </span>
                             </div>
                          <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">0.1%</button>
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs kxYBWW">0.5%</button>
                            <button className="sc-jYKCQm sc-bxLXlR bCZoQs UMPxJ">1%</button>
                            <button tabindex="-1" className="sc-jYKCQm sc-dHMioH bCZoQs foCclh">
                              <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                                <input placeholder="0.50" color="" className="sc-jVSGNQ HfXha" value=""/>%</div>
                                </button>
                                </div>
                                </div>
                                <div className="sc-eEVmNe jpVwse">
                                  <div className="wedth sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                                    <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Transaction deadline</div>
                                    <span style={{marginLeft: "4px"}}>
                                      <div className="sc-irKDMX cwoGFd">
                                        <div className="sc-dvUynV dKBgpN">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
             </svg>
              </div>
               </div>
                </span>
                </div>
             <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
              <button tabindex="-1" className="sc-jYKCQm sc-dHMioH bCZoQs foCclh" style={{width: "80px"}}>
                <input placeholder="20" className="sc-jVSGNQ HfXha" value=""/>
                </button>
                <div className="sc-jJMGnK iJQSkR css-1ecm0so" style={{paddingLeft: "8px"}}>minutes</div>
                 </div>
                  </div>
                  </div>
                <div className="css-18hn7mq">Interface Settings</div>
                <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                  <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                    <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Toggle Expert Mode</div>
                    <span style={{marginLeft: "4px"}}>
             <div className="sc-irKDMX cwoGFd">
               <div className="sc-dvUynV dKBgpN">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <circle cx="12" cy="12" r="10"></circle>
                   <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                   <line x1="12" y1="17" x2="12.01" y2="17"></line>
                   </svg>
                    </div>
                     </div>
                      </span>
                   </div>
                   <button id="toggle-expert-mode-button" className="sc-bA-DTon lcOYlI">
                     <span className="sc-kGVuwA lgWYGM">On</span>
                     <span className="sc-kGVuwA bwBmjj">Off</span>
                     </button>
                     </div>
                     <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                       <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb">
                          <div className="sc-jJMGnK bXUIQO css-1pnt2fu">Disable Multihops</div>
                          <span style={{marginLeft: "4px"}}>
                            <div className="sc-irKDMX cwoGFd">
                              <div className="sc-dvUynV dKBgpN">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                  </svg>
                                   </div>
                                    </div>
                                     </span>
                                   </div>
                                  <button id="toggle-disable-multihop-button" className="sc-bA-DTon lcOYlI">
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
        <Modal.Body className=''>
        
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{flex: "1 1 0%"}}>
          <div className='self'>
            <div style={{height: "112px", width: "100%"}}>
              <div className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr" disabled="" style={{position: "absolute", left: "0px", top: "0px", height: "56px", width: "100%"}}>
                <img src={swap} className="sc-kizEQm qRAyn"/>
                <div className="sc-EZqKI iONckA">
                  <div title="ARC" className="css-8mokm4 dark">ARC</div>
                  <div className="sc-jJMGnK light hCiMzG css-165qfk5">ARC </div>
                  </div>
                  <span>
                    </span>
                    <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
                      </div>
                      </div>
                      <div className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4" style={{position: "absolute", left: "0px", top: "56px", height: "56px", width: "100%"}}>
                        <img className="me-3 sc-cKRKFl cwJYNm" alt="WARC logo" src={swap}/>
                        <div className="sc-EZqKI iONckA">
                          <div title="Wrapped ARC" className="css-8mokm4 dark">WARC</div>
                          <div className='d-flex light'>
                            <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">Wrapped  </span>
                            <span>ARC</span>
                            </div>
                            </div>
                            <span>
                              </span>
                              <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
                                </div>
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
        <Modal.Body className=''>
        
        <div className="sc-bUQyIj kKJihv mt-4"></div>
        <div style={{flex: "1 1 0%"}}><div className='self'>
          <div style={{height: "112px", width: "100%"}}>
            <div className=" my-3 paddig sc-bdnxRM sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr eGJNEW token-item-ETHER ethr" disabled="" style={{position: "absolute", left: "0px", top: "0px", height: "56px", width: "100%"}}>
              <img src={swap} className="sc-kizEQm qRAyn"/>
              <div className="sc-EZqKI iONckA">
                <div title="ARC" className="css-8mokm4 dark">$ARCE</div>
                <div className="d-flex light">
                  <span className="sc-jJMGnK light hCiMzG css-165qfk5">Everest </span>
                  <span>Cash</span>
                   </div>
                   </div>
                   <span>
                    </span>
                    <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
                      </div>
                      </div>
                      <div className="hooveer paddig sc-bdnxRM mt-4 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4" style={{position: "absolute", left: "0px", top: "56px", height: "56px", width: "100%"}}>
                        <img className="me-3 sc-cKRKFl cwJYNm" alt="WARC logo" src={swap}/>
                        <div className="sc-EZqKI iONckA">
            <div title="Wrapped ARC" className="css-8mokm4 dark">$ARCV</div>
        <div className="d-flex light"><span className="sc-jJMGnK light hCiMzG css-165qfk5">Venus </span>
        <span>Cash</span>
         </div>
        <div className="hooveer paddig sc-bdnxRM self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4" style={{position: "absolute", left: "0px", top: "56px", height: "56px", width: "100%"}}>
          <img className="me-3 sc-cKRKFl cwJYNm" alt="WARC logo" src={swap}/>
          <div className="sc-EZqKI iONckA">
            <div title="Wrapped ARC" className="css-8mokm4 dark">$ARCR</div>
            <div className='d-flex light'>
              <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">Royal  </span>
              <span> Archie </span>
              <span> Cash</span>
              </div>
              </div>
              <span>
                </span>
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
                  </div>
                  </div>

        <div className="hooveer paddig sc-bdnxRM mt-6 self_emg sc-gKAaRy sc-iCoGMd sc-iXeHaJ fzUdiI fHYJrX kMthTr bDwXbT token-item-0x6dE594f9ab88B02bc890e0C4eB0B2b936E3Cf2E4" style={{position: "absolute", left: "0px", top: "56px", height: "56px", width: "100%"}}>
          <img className="me-3 sc-cKRKFl cwJYNm" alt="WARC logo" src={swap}/>
          <div className="sc-EZqKI iONckA">
            <div title="Wrapped ARC" className="css-8mokm4 dark">$ARCM</div>
            <div className='d-flex light'>
              <span className="d-flex sc-jJMGnK hCiMzG css-165qfk5">Meta   </span>
              <span> Cash </span>
              </div>
              </div>
              <span>
                </span>
                <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
                  </div>
                  </div>
        </div>
        <span>
          </span>
          <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt fzUdiI fHYJrX ipgglb" style={{justifySelf: "flex-end"}}>
            </div>
            </div>
            </div>
            </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }


function Landing() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [value1, setValue1] = React.useState(false);

    const [theme, setTheme] = useState("light_theme");
    const [iaDark, setIaDark] = useState(false);


    const toggleTheme = () => {
      if (theme === "dark_theme") {
        setTheme("light_theme")
        setIaDark(!iaDark)
        
      }else{
        setTheme("dark_theme")
        setIaDark(!iaDark)

      }
    } ;

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

  return (
    <div className='maain'>
        <div className="sc-fJxALz eFbGYe">
          <div className="sc-bsatvv jnCyRr">
            <div className="sc-bdnxRM sc-gKAaRy sc-jrsJWt sc-dtLLSn fzUdiI fHYJrX ipgglb fTfOsi">
              <a href="." className="sc-eHEENL hTVbYg">
                <div className="sc-hzUIXc jSTRnN">
                  <img width="350px" src={logo} alt="logo"/>
                  </div>
                  </a>
                  </div>
                  <div className="sc-bdnxRM swapp sc-gKAaRy sc-dkQUaI fzUdiI fHYJrX eFlXSC">
                    <span className="bggg">
                      <a className="sc-xGAEC giFUhe ACTIVE" id="swap-nav-link" href="#/swap" aria-current="page">Swap</a>
                      </span>
                      </div>
                      <div className="sc-gIvpjk dVRMhB">
                        <div className="sc-euEtCV eRaVyv">
                          <span className="sc-ikXwFM VYmft">
                            </span>
                            <div className="sc-WZYut fXnmVI" style={{pointerEvents: "auto"}}>
                              <button id="connect-wallet" className="sc-bdnxRM bhVlig sc-kEqXSa sc-crzoAE sc-GvhzO sc-bXexck hAmzBT hUdkEf kxlnZx cvtCNZ">
                                <p className="sc-csTbgd wallet kglWtV">Connect to a wallet</p>
                                </button>
                                </div>
                                </div>
                                <div className="sc-fHCHyC crlswz">
          <button className="sc-dWBRfb jeiBZJ" onClick={() => toggleTheme()}>
        {iaDark?<><span className="fs-4" ><FiSun /></span></>:<><span className="fs-4"><BsMoon /></span></>}  
          </button>
           </div>
            </div>
             </div>
              </div>

        <div className="sc-cSiAOC exbPXw">
          <div className="sc-eEVmNe sc-gVFcvn ceRKqw kDyXxF">
            </div>
            <div height="0" className="sc-cbeScs kuDVIy">
              <div className="sc-hkeOVe cosZie">
                </div>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://testnet.archiescan.io/block/1196244" className="sc-fKgJPI gOrrtT">
                  <div className="sc-jHcXXw jmFqgb">
                    <div className="sc-jJMGnK bXUIQO css-x9zcw6" style={{opacity: "0.3"}}>1196244</div>
                    <div className="sc-bQCEYZ gBldzM">
                      </div>
                      </div>
                      </a>
                      <div className="sc-kBqmDu gGpzTx" style={{marginBottom: "20px", display: "none"}}>
                        <a aria-current="page" className="sc-gJjCVn FMDbw ACTIVE" id="swap-nav-link" href="#/swap">Swap</a>
                        <a className="sc-gJjCVn FMDbw" id="pool-nav-link" href="#/pool">Pool</a>
                        </div>
                        <div className="sc-hmvkKb DCgcf">
                          <div className="sc-hWZktu fkNuDh">
                            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                              <div className="sc-jJMGnK iJQSkR css-1kt4f20">Swap</div>
                              <div className="sc-iuhXDa dBEucF">
                                <button id="open-settings-dialog-button" className="sc-jcsPjo bUEpDn">
        <Button variant="" onClick={() => setModalShow(true)}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="sc-jfkLlK bRRHuO">
          <circle cx="12" cy="12" r="3">
            </circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
              </path>
              </svg> */}
      </Button>

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
            </button>
            </div>
            </div>
            </div>
            <div id="swap-page" className="sc-juXuNZ KigMW">
              <div className="sc-eEVmNe ceRJCx">
                <div id="swap-currency-input" className="sc-geBCVM dqgKzp">
            {
                                value1 == false ?
                                    <>
                                        <div className="first sc-clGGWX dSShbu">
                                          <div className="sc-fiCYzP ftghdH">
                                            <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                                              <div className="sc-jJMGnK bXUIQO css-1rhdhic">From</div>
                                              </div>
                                              </div>
                                              <div className="sc-biHcxt jLSnqi">
                                                <input className="sc-ByBTK tIUQu token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
      <button className="max sc-hfVBHA cyFpBV open-currency-select-button">
        <span className="sc-lfRxJW hoeYaZ">MAX</span>
        </button>
            <button className="sc-hfVBHA cyFpBV open-currency-select-button">
              <span className="sc-lfRxJW hoeYaZ">
            <Button variant="" onClick={() => setModalShow2(true)}>
            <img src={swap} className="sc-kizEQm qRAyn"/>
            <span className="sc-kJNqyW dAolHO token-symbol-container">ARC</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hndLF eDmepi">
              <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path>
              </svg>
      </Button>


      {/* <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      /> */}
            </span>
             </button>
              </div>
                </div>
            <div className="exchange_arrow">
                <div className="sc-bdnxRM  my-3 sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI" onClick={() => setValue1(true)}>
                  <div className="move sc-ecQkzk ggFzum">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#565A69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19">
                        </line>
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
                  </div>
                  <div className="sc-biHcxt jLSnqi">
                    <input className="sc-ByBTK tIUQu token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
            <button className="sc-hfVBHA cyFpBV open-currency-select-button">
            <Button variant="" onClick={() => setModalShow3(true)}>
            <span className="sc-lfRxJW hoeYaZ">
              <span className="sc-kJNqyW kEWqjy token-symbol-container">Token</span>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hndLF eDmepi">
                <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE">
                </path>
                </svg>
                </span>
      </Button>

   {/* <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      /> */}
                </button>
                </div>
                </div>

              </>
              :
              <>
                  <div className="second sc-clGGWX dSShbu">
                    <div className="sc-fiCYzP ftghdH">
                      <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                        <div className="sc-jJMGnK bXUIQO css-1rhdhic">To</div>
                        </div>
                        </div>
                        <div className="sc-biHcxt jLSnqi">
                          <input className="sc-ByBTK tIUQu token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
            <button className="sc-hfVBHA cyFpBV open-currency-select-button">
            <Button variant="" onClick={() => setModalShow3(true)}>
            <span className="sc-lfRxJW hoeYaZ"><span className="sc-kJNqyW kEWqjy token-symbol-container">Token</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hndLF eDmepi">
              <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE">
                 </path>
                  </svg>
                   </span>
      </Button>

   {/* <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      /> */}
                </button>
                   </div>
                     </div>
              <div className="exchange_arrow">
                  <div className="sc-bdnxRM  my-3 sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI" onClick={() => setValue1(false)}>
                    <div className="move sc-ecQkzk ggFzum">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#565A69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                        </div>
                        </div>
              </div>
              <div className="first sc-clGGWX dSShbu">
                <div className="sc-fiCYzP ftghdH">
                  <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                    <div className="sc-jJMGnK bXUIQO css-1rhdhic">From</div>
                    </div>
                    </div>
                    <div className="sc-biHcxt jLSnqi">
                      <input className="sc-ByBTK tIUQu token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
      <button className="max sc-hfVBHA cyFpBV open-currency-select-button">
        <span className="sc-lfRxJW hoeYaZ">MAX</span>
        </button>
            <button className="sc-hfVBHA cyFpBV open-currency-select-button">
              <span className="sc-lfRxJW hoeYaZ">
            <Button variant="" onClick={() => setModalShow2(true)}>
            <img src={swap} className="sc-kizEQm qRAyn"/>
            <span className="sc-kJNqyW dAolHO token-symbol-container">ARC</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hndLF eDmepi">
              <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path>
              </svg>
      </Button>


      {/* <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      /> */}
            </span>
              </button>
                </div>
                  </div>


                                    </>

                            }
            </div>
            <div className="sc-eEVmNe kYKaHR">
              <div className="sc-bdnxRM sc-gKAaRy sc-pNWdM fzUdiI gtRDRy hEuxWI" style={{padding: "0px 1rem"}}>
                </div>
                  </div>
                <div id="swap-currency-output" className="sc-geBCVM dqgKzp">
                </div>
                <div className="sc-bdnxRM sc-dlnjwi imLKPM crWdTg">
                  <div className="sc-eEVmNe jpVwse" style={{padding: "3px 4px"}}>
                    <div className="sc-bdnxRM sc-gKAaRy sc-iCoGMd fzUdiI fHYJrX kMthTr">
                <Button variant="" onClick={() => setModalShow(true)}>
                <div className="sc-dYXZXt gRxzFx css-1rhdhic">Slippage Tolerance</div>
            </Button>
      
            {/* <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}
                    <div className="sc-dYXZXt gRxzFx css-1rhdhic">0.5%</div>
                      </div>
                        </div>
                          </div>
                            </div>
                    <div className="sc-iXquSf bwRbQ">
                      <button className="sc-bdnxRM bhVlig sc-kEqXSa sc-iqAclL hAmzBT iSuonF">Swap</button>
                         </div>
                            </div>
                              </div>
                                </div>
    </div>
  )
}

export default Landing



 







