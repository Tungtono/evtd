import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div>Since there's no design for this page, let's assume you've already created your event 🤣</div>
      <Link to="/event">
        <button className="px-5 py-4 mt-4 rounded-lg mx-auto text-white bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
          See my event
        </button>
      </Link>
    </div>
  );
};

export default CreateEvent;
