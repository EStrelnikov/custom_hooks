import FadeLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "0 auto",
  };


const Loading = () => {
    return (
        <FadeLoader
            loading={true}
            cssOverride={override}
            size={100}
        />
    );
}
 
export default Loading;