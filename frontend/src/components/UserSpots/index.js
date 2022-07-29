import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSpots, updateListing } from '../../store/spots';
import { Link, } from 'react-router-dom';

const UserSpots = () => {
    
    const history = useHistory()
    const dispatch = useDispatch();
    
    const id = useSelector((state) => state.session.user.id);
    const allspots = useSelector((state) => Object.values(state.spots));
    const userSpots =  allspots.filter(spot => spot.ownerId === id);


    useEffect(() => {
        if (!id) {
            history.push('/')
        }
    })
   
    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch])

   

    return (
        <>
          <div className="all-spots-div">
          <div className="left"></div>
          {userSpots.map((spot) => (
                <Link to={`/spots/${spot?.id}`} className="spot-link" key={spot?.id}>


                  <div className={`spot-div spot-div`}>
                    <div className="img-div">
                    </div>
                    <div className="spot-info">
                      <p className="spot-city-state">{`${spot?.city}, ${spot?.state}`}</p>
                      <p className="spot-price">{`$${spot?.price} / night`}</p>
                    </div>
                  </div>
                </Link>
          ))}
            
          </div>
        </>
      )

    
};

export default UserSpots;