import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDragons,reserveDragon,} from '../app/features/counter/dragonMissionSlice';


const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonMission.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragons]);

  const handleReserveDragon = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };

  return (
    <>
      <div>
        {dragons.map((dragon) => (
          <div key={dragon.dragon_id}>
            <p>Name: {dragon.dragon_name}</p>
            <p>Type: {dragon.dragon_type}</p>
            <p>Reserved: {dragon.reserved ? 'Yes' : 'No'}</p>
            <button onClick={() => handleReserveDragon(dragon.dragon_id)}>Reserve</button>
            <img src={dragon.dragon_images} alt={dragon.dragon_name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dragons;
