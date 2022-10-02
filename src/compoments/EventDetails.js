import demoImg from "../img/event.png";
import { BsCalendarWeek, BsPinAngle } from "react-icons/bs";
import { IconContext } from "react-icons";

const EventDetails = () => {
  return (
    <div className="bg-[#FBFAFF] h-screen w-screen md:px-44 md:pt-24 lg:pt-48">
      <img
        src={demoImg}
        alt="demo"
        className="w-screen lg:absolute lg:w-[500px] lg:top-[184px] lg:right-[240px]"
      ></img>
      <div className="mt-[11px] px-5 md:mt-9 md:px-0 lg:mt-0">
        <h2 className="text-[28px] text-primary-1 font-bold">Birthday Bash</h2>
        <p className="text-neutral-2">
          Hosted by <strong>Elysia</strong>
        </p>
      </div>
      <div className="flex mt-6 p-2 mx-3 md:mx-0 md:mt-12">
        <div className="h-12 w-12 bg-white drop-shadow-md rounded-xl flex justify-center items-center">
          <IconContext.Provider value={{ color: "#8456EC", size: "1rem" }}>
            <div>
              <BsCalendarWeek />
            </div>
          </IconContext.Provider>
        </div>
        <div className="ml-5">
          <p className="font-bold text-primary-1">18 August 6:00PM</p>
          <p className="text-neutral-1">to <strong>19 August 1:00PM</strong> UTC +10</p>
        </div>
      </div>
      <div className="flex mt-6 p-2 mx-3 md:mx-0 md:mt-4">
        <div className="h-12 w-12 bg-white drop-shadow-md rounded-xl flex justify-center items-center">
          <IconContext.Provider value={{ color: "#8456EC", size: "1rem" }}>
            <div>
              <BsPinAngle />
            </div>
          </IconContext.Provider>
        </div>
        <div className="ml-5">
          <p className="font-bold text-primary-1">Street name</p>
          <p className="text-neutral-1">Suburb, State, Postcode</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
