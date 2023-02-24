function Content() {
  const userList = [
    {
      id: 1,
      name: "Diane Cooper",
      email: "d@test.com",
      gender: "Male",
      birthday: "Feb 24th, 2000",
      phone: "1234566777",
      status: "Active",
      past: "21",
      upcoming: "2",
    },
    {
      id: 2,
      name: "Diane Cooper",
      email: "d@test.com",
      gender: "Male",
      birthday: "Feb 24th, 2000",
      phone: "1234566777",
      status: "Active",
      past: "21",
      upcoming: "2",
    },
    {
      id: 3,
      name: "Diane Cooper",
      email: "d@test.com",
      gender: "Male",
      birthday: "Feb 24th, 2000",
      phone: "1234566777",
      status: "Active",
      past: "21",
      upcoming: "2",
    },
    {
        id: 4,
        name: "Diane Cooper",
        email: "d@test.com",
        gender: "Male",
        birthday: "Feb 24th, 2000",
        phone: "1234566777",
        status: "Active",
        past: "21",
        upcoming: "2",
      },
      {
        id: 5,
        name: "Diane Cooper",
        email: "d@test.com",
        gender: "Male",
        birthday: "Feb 24th, 2000",
        phone: "1234566777",
        status: "Active",
        past: "21",
        upcoming: "2",
      },
      {
        id: 6,
        name: "Diane Cooper",
        email: "d@test.com",
        gender: "Male",
        birthday: "Feb 24th, 2000",
        phone: "1234566777",
        status: "Active",
        past: "21",
        upcoming: "2",
      }
      
  ];
  return (
    <div>
      {userList?.map((i) => {
        return (
          <div key={i.id}>
            <div className="row">
              <div className="col">
                <span className="Heading">{i.name}</span>{" "}
                <span className="Email"> {i.email}</span>
              </div>
            </div>
            <div className="row">
              <div className="col boxRightBorder">
                <label className="Label">Gender</label>
                <p>{i.gender}</p>
              </div>
              <div className="col boxRightBorder">
                <label className="Label">Birthday</label>
                <p>{i.birthday}</p>
              </div>
              <div className="col boxRightBorder">
                <label className="Label">Phone No.</label>
                <p>{i.phone}</p>
              </div>
              <div className="col"><label className="Label">Member Status</label>
                <p>{i.status}</p></div>
              <div className="col"></div>
              <div className="col boxRightBorder">{i.past}
              <p>Past</p></div>
              <div className="col ">{i.upcoming}
              <p>Upcoming</p></div>
              <div className="col documentSection">View ECG Report Document</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
