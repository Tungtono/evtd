import demoImg from "../img/demo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-secondary-3 min-h-screen w-screen py-7 flex flex-col justify-center items-center lg:items-end lg:pr-40">
      <div className="w-80 md:w-[90%] text-center lg:text-right">
        <div className="text-primary-1 text-4xl md:text-[4rem] font-bold leading-none">
          <div>Imagine if</div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-3 to-primary-4">
            Snapchat
          </div>
          <div>had events.</div>
        </div>
        <div className="text-neutral-1 md:text-2xl md:max-w-[521px] md:ml-auto md:mr-auto lg:ml-auto lg:mr-0 font-light mt-4 leading-none">
          Easily host and share events with your friends across any social media.
        </div>
      </div>
      <img
        src={demoImg}
        alt="demo"
        className="mt-9 h-72 md:h-[550px] lg:absolute lg:top-[100px] lg:left-[170px] drop-shadow-md"
      ></img>
      <Link to="/create">
        <button className="px-5 py-4 md:px-16 mt-[34px] rounded-lg mx-auto text-white bg-gradient-to-r from-primary-3 to-primary-4">
          🎉 Create my event
        </button>
      </Link>
    </div>
  );
};

export default Home;
