import logo from '../assets/Spinner-1s-200px.gif';

const LoadingIndicator = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <img src={logo} alt="loading..." />
        </div>
    )
}

export default LoadingIndicator;
