import "./Status.css";

const Status = () => {
  return (
    <div className="stats" id="stats">
      <h2 className="main-title">Our Stats</h2>
      <div className="container">
        <div className="box">
          <i className="far fa-user fa-2x fa-fw" />
          <span className="number">300</span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw" />
          <span className="number">400</span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw" />
          <span className="number">12</span>
          <span className="text">Countries</span>
        </div>
        {/* <div class="box">
  <i class="far fa-money-bill-alt fa-2x fa-fw"></i>
  <span class="number">500K</span>
  <span class="text">Money</span>
</div> */}
      </div>
    </div>
  );
};

export default Status;
