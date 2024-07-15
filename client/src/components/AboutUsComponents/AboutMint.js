import React from 'react';
import "../../App.css"

const AboutMint = () => {
  return (
    <div className="container card pe-0 card-body quickCard" style={{ width: "90%", fontSize: "25px", color: 'black', borderRadius: '40px bold', marginBottom: "90px", borderRadius: "50px" }}>
      <div className="btn btn-warning d-flex align-items-center justify-content-center" style={{ width: '100%', maxWidth: '300px', height: '80px', position: 'absolute', top: '-12px', bottom: '20px', left: '50%', transform: 'translateX(-50%)', borderRadius: '20px', marginTop: "18px" }}><h1>About MInT</h1></div>

      <div style={{ padding: "20px" }}>
        <h4 className="pt-5 m-2">• MINT in Brief</h4>
        <p style={{fontSize: '22px', color: "Black"}}>
          The Ministry of Innovation and Technology (formerly known as the Ministry of Science and Technology (MoST)) is an agency of the Government of Ethiopia. It was established as a commission in December 1975 by directive No.62/1975. The Ministry of Science and Technology (MoST) was a governmental institution that was established for the first time in December 1975 by proclamation No.62/1975 as a commission. Following the change in government in 1991 and with the issuance of the new economic policy, the Commission was re-established in March 1994 by Proclamation No.91/94. The commission went into its 3rd phase of re-institution on 24 August 1995 by Proclamation No.7/1995, as an agency following the establishment of the Federal Democratic Republic of Ethiopia. Finally, in 2008 it was promulgated at the level of the Ministry of Science and Technology (MoST) Proclamation No. 604/2008 and two more years later, it was established at the ministry level by Proclamation No. 691/2010. The ministry was merged with Ministry of Information Communication and Technology and changed its title to Ministry of Innovation and Technology in October 2018.
        </p>
      </div>
    </div>
  );
}

export default AboutMint;