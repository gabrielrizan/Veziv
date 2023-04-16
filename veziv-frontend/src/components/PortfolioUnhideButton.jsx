function PortfolioUnhideButton({ onUnhide, projectName }) {
    return (
      <div className="card mb-3 bg-secondary text-white mx-3 my-3">
        <div className="card-header">
          <button onClick={onUnhide} className="btn btn-warning">
            Unhide {projectName}
          </button>
        </div>
      </div>
    );
  }

    export default PortfolioUnhideButton;
  