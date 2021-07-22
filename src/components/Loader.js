import spinner from './spinner1.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h2>Fetching Data</h2>
        </div>
    )
}

export default Loader