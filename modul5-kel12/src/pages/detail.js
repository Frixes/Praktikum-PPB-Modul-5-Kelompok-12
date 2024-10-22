import './detail.css';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    const { id } = useParams(); // Get the movie ID from the URL

    // Mock data, you should fetch the actual movie details from an API or pass it through state
    const movie = {
        title: "John Wick",
        genre: "action, crime",
        rate: 4,
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him."
    };

    return (
        <div className="detail-container">
            <h1 className="detail-header">{movie.title}</h1>
            <img className="detail-image" src={movie.img} alt={movie.title} />
            <div className="detail-info">
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rating:</strong> {movie.rate}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    );
}
