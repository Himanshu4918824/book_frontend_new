import React from "react";

export default function Footer() {
  const saleItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&q=80",
      title: "AI FOR A SMARTER TOMORROW: INNOVATIONS ACROSS SECTORS",
      oldPrice: "₹ 1,599.00",
      newPrice: "₹ 1,400.00",
    },

    {
      id: 2,
      image:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=200&q=80",
      title:"COMPUTATIONAL DESIGN AND AUTOMATION IN STRUCTRUAL ENGINEERING: FROM ALGORITHMS TO ARTIFICIAL INTELLIGENCE",
      oldPrice: "₹ 1,599.00",
      newPrice: "₹ 1,400.00",
    },

    {
      id: 3,
      image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80",
      title:"AI, CODE, AND CONCRETE: THE DIGITAL STRATEGY TO TRANSFORM FIELD OPERATIONS AND BRIDGE THE TALENT",
      oldPrice: "₹ 1,599.00",
      newPrice: "₹ 1,400.00",
    },

  ];

  return (
    <>
      <style>{`
        .custom-footer {
          background-color: #2f2f31;
          background-image: url("https://www.transparenttextures.com/patterns/yet-alive.png");
          color: #fff;
          padding: 60px 70px 40px;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1800px;
          margin: 0 auto;
        }

        .footer-heading {
          color: #fff;
          font-size: 32px;
          font-family: serif;
          font-weight: 700;
          margin-bottom: 28px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .newsletter-block {
          padding-right: 40px;
        }

        .newsletter-text {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          line-height: 1.5;
        }

        .newsletter-form {
          width: 100%;
          max-width: 390px;
        }

        .newsletter-input {
          width: 100%;
          height: 64px;
          border: none;
          outline: none;
          padding: 0 22px;
          font-size: 17px;
          color: #666;
          margin-bottom: 12px;
          border-radius: 0;
        }

        .newsletter-btn {
          width: 100%;
          height: 64px;
          border: none;
          background: #eca195;
          color: #fff4ee;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .newsletter-btn:hover {
          background: #e59082;
        }

        .social-icons {
          display: flex;
          gap: 14px;
          margin-top: 55px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 54px;
          height: 54px;
          background: #ffffff;
          color: #1f2d3d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px);
        }

        .sale-block {
          padding: 0 10px;
        }

        .sale-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 34px;
        }

        .sale-img {
          width: 68px;
          height: 68px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .sale-content {
          flex: 1;
          min-width: 0;
        }

        .sale-title {
          font-size: 18px;
          line-height: 1.55;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          margin: 0 0 8px;
          word-break: break-word;
        }

        .price-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .old-price {
          font-size: 16px;
          color: #ffb07f;
          text-decoration: line-through;
        }

        .new-price {
          font-size: 16px;
          color: #ffffff;
          font-weight: 500;
        }

        .right-block {
          padding-left: 20px;
        }

        .section-block {
          margin-bottom: 42px;
        }

        .footer-text {
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 0;
          color: #ffffff;
          word-break: break-word;
        }

        .language-box {
          width: 230px;
          min-height: 62px;
          background: #1d1d1f;
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding: 14px 22px;
          margin-top: 50px;
          font-size: 17px;
          color: #dcdcdc;
        }

        /* Large screen */
        @media (max-width: 1399px) {
          .custom-footer {
            padding: 50px 40px 35px;
          }

          .footer-heading {
            font-size: 28px;
          }

          .newsletter-text {
            font-size: 18px;
          }

          .sale-title {
            font-size: 16px;
          }

          .footer-text,
          .old-price,
          .new-price {
            font-size: 15px;
          }
        }

        /* Tablet */
        @media (max-width: 991px) {
          .custom-footer {
            padding: 40px 25px 30px;
          }

          .newsletter-block {
            padding-right: 0;
          }

          .sale-block {
            padding: 0;
          }

          .right-block {
            padding-left: 0;
          }

          .footer-heading {
            font-size: 24px;
            margin-bottom: 18px;
          }

          .newsletter-text {
            font-size: 17px;
            margin-bottom: 18px;
          }

          .newsletter-form {
            max-width: 100%;
          }

          .newsletter-input,
          .newsletter-btn {
            height: 56px;
            font-size: 15px;
          }

          .social-icons {
            margin-top: 28px;
          }

          .social-link {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .sale-item {
            gap: 14px;
            margin-bottom: 24px;
          }

          .sale-img {
            width: 60px;
            height: 60px;
          }

          .sale-title {
            font-size: 15px;
            line-height: 1.5;
          }

          .section-block {
            margin-bottom: 28px;
          }

          .footer-text {
            font-size: 15px;
            line-height: 1.8;
          }

          .language-box {
            margin-top: 20px;
            width: 210px;
            min-height: 56px;
            font-size: 15px;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .custom-footer {
            padding: 32px 18px 25px;
          }

          .footer-heading {
            font-size: 22px;
            margin-bottom: 16px;
          }

          .newsletter-text {
            font-size: 16px;
          }

          .newsletter-input,
          .newsletter-btn {
            height: 52px;
            font-size: 14px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .social-icons {
            margin-top: 24px;
            gap: 12px;
          }

          .social-link {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }

          .sale-item {
            align-items: flex-start;
          }

          .sale-img {
            width: 56px;
            height: 56px;
          }

          .sale-title {
            font-size: 14px;
          }

          .price-row {
            gap: 6px;
          }

          .old-price,
          .new-price,
          .footer-text {
            font-size: 14px;
          }

          .language-box {
            width: 100%;
            max-width: 220px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .custom-footer {
            padding: 28px 14px 20px;
          }

          .footer-heading {
            font-size: 20px;
          }

          .newsletter-text {
            font-size: 15px;
          }

          .sale-title {
            font-size: 13px;
            line-height: 1.45;
          }

          .sale-img {
            width: 52px;
            height: 52px;
          }

          .footer-text,
          .old-price,
          .new-price {
            font-size: 13px;
          }

          .language-box {
            font-size: 14px;
            padding: 12px 16px;
          }
        }
      `}</style>

      <footer className="custom-footer">
        <div className="container-fluid footer-container">
          <div className="row gy-5">
            <div className="col-12 col-lg-6">
              <div className="newsletter-block">
                <h2 className="footer-heading">NEWSLETTER</h2>
                <p className="newsletter-text">
                  Make sure you don't miss anything!
                </p>

                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your e-mail address"
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn">
                    SUBSCRIBE
                  </button>
                </form>

                <div className="social-icons">
                  <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-whatsapp"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-twitter-x"></i></a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="sale-block">
                <h2 className="footer-heading">ON SALE</h2>

                {saleItems.map((item) => (
                  <div className="sale-item" key={item.id}>
                    <img src={item.image} alt={item.title} className="sale-img" />
                    <div className="sale-content">
                      <h5 className="sale-title">{item.title}</h5>
                      <div className="price-row">
                        <span className="old-price">{item.oldPrice}</span>
                        <span className="new-price">{item.newPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="right-block">
                <div className="section-block">
                  <h2 className="footer-heading">LOCATION</h2>
                  <p className="footer-text">E-2A, Chetakpuri,</p>
                  <p className="footer-text">Gwalior, Madhya Pradesh,</p>
                  <p className="footer-text">India - 474002</p>
                </div>

                <div className="section-block">
                  <h2 className="footer-heading">CONTACT US</h2>
                  <p className="footer-text">(+91) 70004-86059</p>
                  <p className="footer-text">(+91) 92442-86059</p>
                  <p className="footer-text">mr.xoffencer@gmail.com</p>
                  <p className="footer-text">info@xoffencerpublication.in</p>
                </div>

              </div>
            </div>

            <div style={{textAlign:'center'}}>© Xoffencer Publication 2022</div>
          </div>
        </div>
      </footer>
    </>
  );
}