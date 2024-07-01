import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="card">
            <img src={`../src/assets/${props.items.img}`} alt="img" />
            <div className="card--info">
                <div className="info--location">
                    <span className="material-symbols-outlined">location_on</span>
                    <h2 className="location--title">{props.items.country.toUpperCase()} </h2>
                    <h3 className="location--link">View on Google Maps</h3>
                </div>
                <h1 className="info--title">{props.items.location}</h1>
                <h3 className="info--date">{props.items.date.arrival} - {props.items.date.departure}</h3>
                <p className="info--description">{props.items.description}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    items: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        country: PropTypes.string,
        location: PropTypes.string,
        mapurl: PropTypes.string,
        date: PropTypes.shape({
            arrival: PropTypes.string,
            departure: PropTypes.string
        }),
        description: PropTypes.string
    })
};

export default Card