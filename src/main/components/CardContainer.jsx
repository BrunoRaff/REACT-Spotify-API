import { Card } from "./Card"
import './CardContainer.css'

export const CardContainer = ({ tracks }) => {

    return (
        <>
            <h2>Top Tracks</h2>
            <div className="container">
                {tracks.map(track => (
                    <Card
                        key={track.id}
                        id={track.id}
                        img={track.album.images[1].url}
                        name={track.name} />
                ))}
            </div>
        </>
    )
}
