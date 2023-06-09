
import React from "react";

export default function Home() {
  
    return (
      <div className="container-fluid p-0">
        <div className="landing" id="Home" style={{ backgroundImage: "url(https://i.pinimg.com/564x/b4/ab/72/b4ab7222da63b12c06c8e3ba9290bd0b.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh" }}>
          <div className="container d-flex align-items-center justify-content-center h-100">
            <div className="col-md-6 text-white text-left">
              <h1 style={{ fontStyle: "italic", fontWeight: "bold", fontFamily: "Sofia" }}>
                <div className="text-center">
                  Libify<br />
                  Review and add your favorite books
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }


