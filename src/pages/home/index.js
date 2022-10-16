import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>WELCOME HOME</h1>

      <Link to="/onboard">Sign Up</Link>
    </div>
  );
}

export default Home;
