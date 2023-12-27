import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMissions,joinMission,} from '../app/features/counter/dragonMissionSlice';
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.dragonMission.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <>
      <div>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <p>Mission Name: {mission.mission_name}</p>
            <p>Description: {mission.mission_description}</p>
            <p>Reserved: {mission.reserved ? 'Yes' : 'No'}</p>
            <button onClick={() => handleJoinMission(mission.mission_id)}>Join Mission</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Missions;
