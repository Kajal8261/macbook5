import folder from "../assets/folder.svg";
import plus from "../assets/plus.svg";
import upload from "../assets/upload.svg";
import home from "../assets/home.svg";
import patient from "../assets/patient.svg";
import setting from "../assets/setting.svg";
import report from "../assets/report.svg";
import logout from "../assets/logout.svg";

function Sidebar() {
  const icons = [
    { id: 1, iconName: "Home", path: home },
    { id: 2, iconName: "New", path: plus },
    { id: 3, iconName: "Patient", path: patient },
    { id: 4, iconName: "Folder", path: folder },
    { id: 5, iconName: "Upload", path: upload },
    { id: 6, iconName: "Report", path: report },
    { id: 7, iconName: "Setting", path: setting },
    { id: 8, iconName: "Logout", path: logout }
  ];
  return (
    <div className="sidebar">
      {icons?.map((i) => {
        return (
          <div key={i.id} style={{ marginBottom: 30 }}>
            <img className="sidebarIcon" src={i.path}></img>
            <h6>{i.iconName}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
