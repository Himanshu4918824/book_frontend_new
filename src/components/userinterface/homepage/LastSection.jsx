import logo1 from "../../../assets/logo1.png";
import dance from "../../../assets/dance.png";
import lastimage from "../../../assets/lastimage.png";

export default function LastSection() {
  return (<div>
    <div className="container-fluid p-0" style={{ background: '#e9e4e4'}}>
      
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-12 col-md-7 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <div style={{ width: "40px", height: "2px", background: "#444", marginRight: "15px" }}></div>

              <h1 style={{ fontSize: "clamp(30px,5vw,60px)", fontWeight: "400" }}>
                <span style={{border: "1px solid #e5a192",padding: "10px 20px",marginRight: "10px",color: "#e5a192",display: "inline-block"}}>
                  M
                </span>
                r.Xoffencer
              </h1>
            </div>

            
            <p style={{letterSpacing: "4px",fontSize: "12px",marginTop: "10px"}}>
              INSPIRING WRITER AND BUSINESS OWNER
            </p>

          
            <div style={{width: "250px", borderBottom: "2px dotted #e5a192",margin: "10px auto 0",}} className="mx-md-0"></div>
          </div>

          
          <div className="col-12 col-md-5 text-center mt-4 mt-md-0">
            <img src={`${logo1}`} alt="logo" className="img-fluid" style={{ maxHeight: "400px",objectFit: "contain"}}/>
          </div>
        </div>
      </div>

     
      <div className="container position-relative" style={{ marginTop: "-120px",marginBottom:50 }}>
        <div className="row">
          <div className="col-12 col-md-8">
            
            <div style={{background: "#c98947",color: "white", padding: "40px", borderRadius: "2px",}}>
              <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
                He is a Cyber Security Researcher and Writes Many books on web
                security. He has work appearing or forthcoming in over a dozen
                venues, He is also known as Mr.Xoffencer. He is also CEO of this
                company along with 5+ Companies, specializing in custom book
                publishing and social media marketing services.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>

    {/************Niche wali part*************** */}

    <div>
      <div
      style={{
        backgroundImage: `url(${lastimage})`,
        width:'100%',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={`${dance}`}
              alt="book"
              style={{
                width: "100%",
                maxWidth: "450px",
                objectFit: "contain",
              }}
            />
          </div>

           <div className="col-lg-7">
            <div
              style={{
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "40px 30px",
              }}
            >
              <h1
                className="text-center mb-4"
                style={{ fontFamily: "serif", fontWeight: "600" }}
              >
                Frequently Asked Questions
              </h1>

              <div className="mb-4 text-center">
                <h2 style={{ fontFamily: "serif", fontWeight:'bold'  }}>Who are we ?</h2>
                <p>
                  Xoffencer Publication provides a platform to published and
                  unpublished authors/writers to publish their contents,
                  stories, and poetries.
                </p>
              </div>

              <div className="mb-4 text-center">
                <h2 style={{ fontFamily: "serif", fontWeight:'bold'  }}>
                  What do we do?
                </h2>

                 <p>
                  We Publish, design, proofread, arrange and organize books. We
                  are recognized as high-quality book publishers who offer the
                  best packages to all the writers at very affordable prices.
                </p>
              </div>

              <div className="mb-4 text-center">
                <h2 style={{ fontFamily: "serif", fontWeight:'bold' }}>
                  What is the benefit of an anthology?
                </h2>
                <p>
                  Anthologies are the one place where different writers can
                  connect on a personal level with other writers. This
                  interaction helps them to grow as a writer as well as helps
                  them to grow their reach among readers and different
                  communities.
                </p>
              </div>

              <div className="text-center">
                <h2 style={{ fontFamily: "serif", fontWeight:'bold'  }}>
                  Why should we pay for anthology participation?
                </h2>
                <p>
                  Expenses like Cover Creation, Manuscript Editing, Book
                  Formatting, ISBN allocation, etc, each of which costs money,
                  thus an entry charge is taken.
                   </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

         </div>
         



  </div>);
}