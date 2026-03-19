import book from "../../../assets/book.png";
import mid from "../../../assets/midsection.png";
import book1 from "../../../assets/book1.png";
import flames from "../../../assets/flames.png";
import LastSection from "./LastSection";

export default function Body() {
  return (<div>

  {/***********Hero Section******************** */}
   <div style={{width: "100%", minHeight: "100vh", background: "#f8f6f2", fontFamily: "Arial, sans-serif", padding: "40px 20px"}}>
    <div className="container">
     <div className="row align-items-center">

      {/* Left Side */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div style={{position: "relative", width: "100%", maxWidth: "320px", height: "250px", marginBottom: "30px"}}>
          <div style={{position: "absolute",top: "0",left: "0",width: "190px", height: "220px", border: "1px solid #f2b4aa"}}></div>

          <div style={{ position: "absolute", top: "20px", left: "20px" }}>
            <span style={{fontSize: "clamp(60px, 10vw, 120px)",color: "#f2a79c",fontFamily: "Georgia, serif", fontWeight: "bold"}}>
                 B
            </span>

            <span style={{fontSize: "clamp(40px, 6vw, 85px)",color: "#111", fontFamily: "Georgia, serif", marginLeft: "-10px"}}>
              OOK
            </span>
          </div>

          <h1 style={{position: "absolute",top: "150px",left: "0",fontSize: "clamp(40px, 8vw, 90px)",fontFamily: "Georgia, serif", color: "#111", margin: 0}}>
            ISBN
          </h1>
        </div>

        <p style={{letterSpacing: "3px",fontSize: "12px",fontWeight: "bold", marginBottom: "10px"}}>
          HAVE MANUSCRIPT? - PUBLISH TODAY
        </p>

        <div style={{width: "100%", maxWidth: "350px", borderBottom: "2px dotted #f2b4aa", marginBottom: "30px"}}></div>

        <p style={{fontSize: "20px",lineHeight: "1.7",fontStyle: "italic",color: "#333"}}>
          Xoffencer Publication, We provide you with premium quality book
          publication services and book distribution throughout all networks
          may it be online or offline along with Premium Designed Covers and
          Book Formatting.
        </p>
      </div>

      {/* Right Side */}
      <div className="col-12 col-md-6 text-center">
        <img src={book}  alt="book" style={{width: "100%", maxHeight: "600px", objectFit: "cover",borderRadius: "10px" }}/>
      </div>

    </div>
  </div>
</div>


{/***************Services Section******************** */}

    <div style={{width: "100%",minHeight: "70vh", backgroundImage: `url(${mid})`, backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat", position: "relative", fontFamily: "Arial, sans-serif",marginBottom:90}}>

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


{/***************Middle Section************************ */}

 <div className="container-fluid p-0 mt5">
      <div className="position-relative" style={{height: "60vh",backgroundImage: `url(${book1})`, backgroundSize: "cover", backgroundPosition: "center"}}>

        {/* Overlay (optional dark effect) */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.2)" }}></div>

        
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            
            <div className="col-md-6 d-none d-md-block"></div>
             <div className="col-12 col-md-6 text-center text-md-start text-white">
 
              <h1 style={{fontSize: "clamp(32px, 5vw, 64px)",fontWeight: "500",letterSpacing: "2px"}}>
                <span style={{border: "1px solid #d4a373", padding: "10px 18px", marginRight: "10px", color: "#d4a373"}}>
                  D
                </span>
                ASH INTO THE JOURNEY
              </h1>

              
              <p className="mt-3" style={{letterSpacing: "4px",fontSize: "14px"}}>
                EXPLORE THE WORLD NOW
              </p>

              {/* Dotted line */}
              <div style={{width: "200px",borderBottom: "2px dotted #d4a373", marginTop: "10px"}}></div>

            </div>
          </div>
        </div>
      </div>
    </div>



{/************ Story Section****************** */}

 <div className="container-fluid py-5" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img src={`${flames}`} alt="art" className="img-fluid" style={{maxHeight: "500px",objectFit: "contain",}}/>
          </div>

          <div className="col-12 col-md-6 text-center text-md-start px-3 px-md-5">
            
           
            <div style={{fontSize: "50px",color: "#d4a373",lineHeight: "1"}}>
              “
            </div>

            
            <h3 style={{fontWeight: "500",marginTop: "10px",marginBottom: "20px", lineHeight: "1.5"}}>
              A story that will really make you tremble
              <br />
              with anticipation!
            </h3>

            {/* Small Label */}
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">

              <div style={{width: "40px",height: "2px",background: "#d4a373", marginRight: "10px" }}></div>
              <span style={{ fontSize: "12px", letterSpacing: "2px" }}>
                SUBSOLAR DESIGNS
              </span>
            </div>

            
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              Carrot cake chocolate cake gummies ice cream. Croissant chocolate lemon
              drops lemon drops cotton candy biscuit. Soufflé tart sweet roll carrot cake
              icing bear claw dessert oat cake. Lollipop ice cream danish jelly beans
              cotton candy liquorice cotton candy lemon drops halvah. Candy caramels jelly beans.
            </p>

           
            <h2 style={{fontFamily: "cursive", marginTop: "30px"}}>
              Kathy Andrews
            </h2>

          </div>
        </div>
      </div>
    </div>

    <div>
      <LastSection/>
    </div>



      
    

  </div>);
}