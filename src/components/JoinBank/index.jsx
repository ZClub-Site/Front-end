import { Link } from "react-router-dom";
import "./index.css";

const JoinBank = () => {
  return (
    <section id="joinBank">
      <div className="container join__bank-container">
        <h1>
          The best day to join Bankist was one year ago. The second best is
          today!
        </h1>
        <Link to="/register" className="btn join__bank-link">
          Open your free account today!
        </Link>
      </div>
    </section>
  );
};

export default JoinBank;
