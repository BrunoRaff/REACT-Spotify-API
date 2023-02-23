import './Card.css'

export const Card = ({ img, name }) => {

    return (
        <div className="card-container">
            <img src={img} />
            <h2>{name}</h2>
            <button>Ver mas</button>
        </div>
    )
}
