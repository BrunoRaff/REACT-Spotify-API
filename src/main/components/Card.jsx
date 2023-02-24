import './Card.css'
import { Link } from 'react-router-dom'

export const Card = ({ img, name, id }) => {

    return (
        <div className="card-container">
            <Link to={`recommendation/${id}`}><img src={img} /></Link>
            <h2>{name}</h2>
        </div>
    )
}
