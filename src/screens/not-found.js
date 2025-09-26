import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <div className="not-found-text">Oops! Page not found.</div>
      <button className="not-found-button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
