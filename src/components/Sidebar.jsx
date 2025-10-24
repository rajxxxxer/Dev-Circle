import { useNavigate } from "react-router-dom";
import Menuitems from "./Menuitems";

const Sidebar = ({ setSideOpen }) => {
  const nav = useNavigate();
  return (
    <div className="w-60 xl:w-72 bg-white border-r border-amber-200 flex flex-col justify-between items-center">
      <div>
        <img className="w-26 ml-7 my-2 cursor-pointer " onClick={() => nav('/')} src="/logo_s.png" alt="Sidebar Logo" />
        <hr className="border-gray-300 mb-8" />
        <Menuitems setSideOpen={setSideOpen} />
      </div>
    </div>
  );
};
export default Sidebar;
