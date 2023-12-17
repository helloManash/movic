import "./style6.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar(props) {
  return (
    <>
      <SearchIcon size={27} className="icon6" />
      <input
        className="input6"
        type="text"
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
}