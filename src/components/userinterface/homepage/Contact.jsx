import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact()
 {
  return (<div>
    <div>
        <Header/>
    </div>

    
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e9e9e9",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "150px",
            color: "#e89a8a",
            fontFamily: "'Playfair Display', serif",
            lineHeight: "1",
            marginRight: "-20px",
          }}
        >
          C
        </span>

        <h1
          style={{
            fontSize: "60px",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
            color: "#222",
            margin: 0,
          }}
        >
          ONTACT ME
        </h1>
      </div>

      
      

     
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row justify-content-center">

          <div className="col-md-6">
            <h1 style={{fontSize: "60px",fontWeight: "500",letterSpacing: "2px",textAlign:'left'}}>
              GET IN TOUCH
            </h1>

            <p style={{color: "#555",lineHeight: "1.6",maxWidth: "500px", marginTop: "20px",textAlign:'left'}}>
                I will be happy to answer any of your burning questions about my book
                or future endeavors. You can also visit me at my working place or call
                my office.
            </p>


            <div style={{display: "flex",marginTop: "40px",alignItems: "flex-start",textAlign:'left'}}>
                <div style={{fontSize: "40px", marginRight: "15px",color: "#f4a9a8"}}>
                  📍
               </div>

              <div>
                <h4 style={{ fontWeight: "600" }}>ADDRESS</h4>
                <p style={{ color: "#444", margin: 0 }}>
                    E-2A, Chetakpuri,<br />
                    Gwalior, Madhya Pradesh,<br />
                     India - 474002
                </p>
              </div>
            </div>


             <div style={{display: "flex",marginTop: "40px",alignItems: "flex-start",textAlign:'left'}}>
                <div style={{fontSize: "40px", marginRight: "15px",color: "#f4a9a8"}}>
                  📱
               </div>

              <div>
                <h4 style={{ fontWeight: "600" }}>PHONE</h4>
                  <p style={{ color: "#444", margin: 0 }}>
                    (+91) 70004-86059<br />
                    (+91) 92442-86059
              </p>
              </div>
            </div>


                
          </div>


          <div className="col-md-6">
            <form>
              <div className="mb-3 text-start">
                <label className="form-label">Name *</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">Message *</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              <button className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>

    <div>
        <Footer/>
    </div>
  </div>);
};
