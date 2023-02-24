import { Card } from "./Card"
import './CardContainer.css'

export const CardContainer = ({ artists }) => {

    return (
        <>
            <h2>Top Songs</h2>
            <div className="container">
                {artists.map(artist => (
                    <Card
                        key={artist.id}
                        img={artist.images[1].url}
                        name={artist.name} />
                ))}
            </div>
        </>
    )
}
