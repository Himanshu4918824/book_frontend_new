import React from "react";

import aboutbg from "../../../assets/aboutbg.png";
import Header from "./Header";
import LastSection from "./LastSection";
import mid from "../../../assets/midsection.png";
import Footer from "./Footer";

export default function AboutUs() {
  return (<div>
    <div>
      <Header/>
    </div>


   <div style={{backgroundImage: `url(${aboutbg})`,backgroundSize: "cover",backgroundPosition: "center",minHeight: "100vh", display: "flex",alignItems: "center", padding: "80px 0"}}>
    <div className="container">

     <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <span style={{fontSize: "150px", color: "#e89a8a",fontFamily: "'Playfair Display', serif",lineHeight: "1", marginRight: "-20px"}}>
          A
        </span>

        <h1 style={{fontSize: "60px",fontFamily: "'Playfair Display', serif",letterSpacing: "2px",color: "#222",margin: 0}}>
          bout Us
        </h1>
      </div>

    
    <div className="row">

      {/* LEFT CONTENT */}
       <div className="col-md-3"></div>
      <div className="col-md-4">
        <p style={{ color: "#444", lineHeight: "28px" }}>
          Xoffencer International Book Publication House is a trusted Publisher.
          It will take you with a simplified approach to publishing your books.
          We would be happy to receive your manuscripts and meeting talented
          authors and co-authors on board.
        </p>

        <p style={{ color: "#444", lineHeight: "28px" }}>
          We would love to deal with your beautiful poetries, stories, and other
          write-ups. Here we will put efforts to become more environmentally
          friendly and will encourage authors to move forward in life.
        </p>

        <p style={{ color: "#444", lineHeight: "28px" }}>
          We will provide you with a writer’s congenial platform which will
          enhance the smooth working of our cell and the relations too.
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-md-4">
        <p style={{ color: "#444", lineHeight: "28px" }}>
          Our work will always provide you with the finest quality. We will offer
          you the most affordable packages with exciting offers. Which will be
          fully customizable.
        </p>

        <p style={{ color: "#444", lineHeight: "28px" }}>
          We especially pride ourselves on the strong relationships we have with
          both authors and literary agents. These important elements are why we
          consistently manage to publish such high-quality and popular books.
          Contact us to find out more.
        </p>

        <button style={{marginTop: "20px",border: "1px solid black",padding: "10px 25px",background: "transparent",fontWeight: "500", letterSpacing: "1px" }}>
          GET IN TOUCH
        </button>
      </div>

    </div>
  </div>
</div>


<div style={{marginBottom:20}}>
  <LastSection/>
</div>


{/*****************middle section***************** */}

  <div
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-md-end">
          
          <div className="col-12 col-md-8 col-lg-5">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.1)",
                borderRadius:10
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  fontSize: "40px",
                  color: "#d4a373",
                  marginBottom: "20px",
                }}
              >
                ❝
              </div>

              {/* Text */}
              <p
                style={{
                  fontSize: "20px",
                  color: "#444",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Creativity is putting your imagination to work, and it's
                produced the most extraordinary results in human culture.
              </p>

              {/* Author */}
              <div
                className="d-flex align-items-center"
                style={{
                  fontSize: "14px",
                  letterSpacing: "2px",
                  color: "#888",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "#d4a373",
                    marginRight: "10px",
                  }}
                ></span>
                KEN ROBINSON
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*******Service Provide*************/}

    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#e9e9eb",
        padding: "80px 20px",
      }}
    >
      <div className="d-flex align-items-center flex-wrap justify-content-center">
        
        {/* Box with O */}
        <div
          style={{
            border: "1px solid #e6a69a",
            padding: "20px 30px",
            marginRight: "15px",
          }}
        >
          <span
            style={{
              fontSize: "70px",
              color: "#e6a69a",
              fontFamily: "Cinzel Decorativer",
              fontStyle:'normal',
              fontWeight:800
            }}
          >
            O
          </span>
        </div>

        {/* Text */}
        <div
          style={{
            fontSize: "40px",
            fontWeight: "500",
            color: "#222",
            fontFamily: "Cinzel Decorative",
            fontStyle:'normal',
            letterSpacing: "2px",
            textAlign: "center",
            fontWeight:800
          }}
        >
          UR SERVICES WE PROVIDE
        </div>

      </div>
    </div>


    
    {/***************Services Section******************** */}
    
        <div style={{width: "100%",minHeight: "70vh", backgroundImage: `url(${mid})`, backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat", position: "relative", fontFamily: "Arial, sans-serif"}}>
    
      {/* Overlay */}
      <div style={{position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)"}}></div>
    
      <div className="container" style={{position: "relative", zIndex: 2, padding: "60px 20px", color: "#fff" }}>
        <div className="row g-5 align-items-start">
    
          <div className="col-12 col-md-6 col-lg-4">
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "50px", color: "#f3b0a8" }}>⊞</div>
    
              <div>
                <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif" }}>
                  Cover Designing
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  Premium Covers for all your books, as per your requirements and
                  preferences.
                </p>
              </div>
            </div>
          </div>
    
          
          <div className="col-12 col-md-6 col-lg-4">
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "50px", color: "#f3b0a8" }}>☁</div>
    
              <div>
                <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif" }}>
                  Book Publishing
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  We provide the most affordable premium Book Publication services
                  to all authors.
                </p>
              </div>
            </div>
          </div>
    
          
          <div className="col-12 col-md-6 col-lg-4">
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "50px", color: "#f3b0a8" }}>⌘</div>
    
              <div>
                <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif" }}>
                  Book Compiling
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  We guide and help you in compiling anthologies. Packages start at
                  Zero.
                </p>
              </div>
            </div>
          </div>
    
          
          <div className="col-12 col-md-6 col-lg-4">
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "50px", color: "#f3b0a8" }}>✎</div>
    
              <div>
                <h2 style={{ fontSize: "26px", fontFamily: "Georgia, serif" }}>
                  Book Distribution
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  We provide ISBN Allocation and POD services to other publishers.
                </p>
              </div>
            </div>
          </div>
    
          
          <div className="col-12 text-center">
            <button
              style={{
                background: "rgba(80, 50, 35, 0.75)",
                color: "#fff4ef",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "15px 30px",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
    >
              Check Packages
            </button>
          </div>
    
        </div>
      </div>
    </div>
    

    <div>
      <Footer/>
    </div>






  </div>);
}