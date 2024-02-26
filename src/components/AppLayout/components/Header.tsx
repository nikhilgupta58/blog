import { useHistory } from "react-router-dom";
import { homeRoute } from "../../../constants/route";

export default function Header() {
  const history = useHistory();
  return (
    <div
      className="w-full p-6 bg-slate-300"
      onClick={() => history.push(homeRoute)}
    >
      <h4 className="text-center cursor-pointer">Ziffi Blogging</h4>
    </div>
  );
}
