import React from "react";
import "./../css/success.css";
import Check from "./../img/checkedBlue.svg";

const Success = props => (
  <main>
    <div id="outsideBox">
      <div id="insideBox">
        <div id="message">
          <section>
            <img src={Check} alt="blue check mark" />
            <h2>Congratulations!</h2>
          </section>
          <p>
            You have created a new account. Now navigate to the Contacts area
            (link at the top of this page) to begin building out your Rolodex of
            contacts.
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default Success;
