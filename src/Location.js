import "./Location.scss";
import { ImLocation } from "react-icons/im";

function Location() {
  return (
    <>
      <div className="location">
        <h2>
          <ImLocation />
        </h2>
        <diV className="location-heading">
          <h3>18&#176;</h3>

          <h3>Chandrapur,Maharashtra</h3>
          <h3>India</h3>
        </diV>
      </div>
    </>
  );
}

export default Location;
