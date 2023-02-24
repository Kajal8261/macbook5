function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control mt-3 mb-2"
            placeholder="Find By Name or Phone No"
          ></input>
        </div>

        <div className="col-sm-3">
          <div className="input-group mt-3 mb-2">
            <span className="input-group-text" id="basic-addon1">
              Gender
            </span>
            <select className="form-control form-select">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input-group mt-3 mb-2">
            <span className="input-group-text" id="basic-addon1">
              Member Status
            </span>
            <select className="form-control form-select">
              <option>Active Member</option>
              <option>Inactive Member</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
