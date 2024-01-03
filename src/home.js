import "./home.css";

function home() {
  return (
    <div>
      <div className="home-img">
        <img
          src="img/bg.png"
          alt="Cinque Terre"
          width="1920"
          height="1080"
          style={{ left:-320,top: 0, position: "absolute" }}
        />
      </div>
      {/*<div classname="logo">
      <img src="img/Logo.png" alt="Cinque Terre"
          width="920"
          height="591"
          style={{ left: 20, top: 80, position: "absolute" }}/>
  </div>*/}


      <h4 className="hh13">
        
      The Skin Care Shop is an item darlings dream.<br/>
       We are intense about our healthy skin and genuinely<br /> 
       committed to offering the most progressive healthy skin items in the business today.<br />
        Our customers are essential to us and we are here to help with all healthy skin needs.<br />
         We have faith in results.
      </h4>

      <h4 className="hh14"></h4>

      <h4 className="hh19"></h4>

      <button className="hh15"><i class="fab fa-facebook"></i></button>

      <button className="hh16"><i class="fab fa-instagram"></i></button>

      <button className="hh17"><i class="fab fa-twitter-square"></i></button>

      <button className="hh18"><i class="fab fa-youtube"></i></button>
    </div>
  );
}

export default home;
