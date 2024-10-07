import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {
    const {_id, title,  image_url, details } = aNews;
    return (
        <div className="card bg-base-100 mb-16 shadow-xl border-b-2">
            <figure>
                <img 
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
              
                    {
                        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-500 underline'>Read more</Link></p>: <p>{details}</p>
                    }
          
                
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNews: PropTypes.object,
};

export default NewsCard;