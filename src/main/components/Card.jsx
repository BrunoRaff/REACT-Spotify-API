import './Card.css'

export const Card = ({ img, name }) => {

    return (
        <div className="card-container">
            <a href="#"><img src={img} /></a>
            <h2>{name}</h2>
        </div>
    )
}
