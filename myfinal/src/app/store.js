import { configureStore } from "@reduxjs/toolkit";
import dragonMissionModule from './features/counter/dragonMissionSlice';

const store = configureStore({
  reducer: {
    dragonMission: dragonMissionModule.reducer,
  },
});

export const {
  fetchDragons,
  reserveDragon,
  fetchMissions,
  joinMission,
} = dragonMissionModule;

export default store;

