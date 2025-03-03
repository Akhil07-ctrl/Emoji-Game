import './index.css';

const NavBar = ({ score, topscore }) => {
  return (
    <nav>
      <div className="left">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="right">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topscore}</p>
      </div>
    </nav>
  );
};

export default NavBar;