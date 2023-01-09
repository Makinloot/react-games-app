import { Circles } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="Loading">
      <div className="container">
        <div className="Loading-wrapper">
          <Circles
            height="400"
            width="100%"
            color="#0061fd"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading