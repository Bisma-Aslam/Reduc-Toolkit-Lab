import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragonMission/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  const transformedData = response.data.map((dragon) => ({
    dragon_id: dragon.id,
    dragon_name: dragon.name,
    dragon_type: dragon.type,
    dragon_images: dragon.flickr_images,
    reserved: false, 
  }));
  return transformedData;
});

export const reserveDragon = createAsyncThunk('dragonMission/reserveDragon', (dragonId) => {
  return { dragonId };
});

export const fetchMissions = createAsyncThunk('dragonMission/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const transformedData = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    reserved: false, 
  }));
  return transformedData;
});

export const joinMission = createAsyncThunk('dragonMission/joinMission', (missionId) => {
  return { missionId };
});

const dragonMissionSlice = createSlice({
  name: 'dragonMission',
  initialState: {
    dragons: [],
    missions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.dragons = action.payload;
      })
      .addCase(reserveDragon.fulfilled, (state, action) => {
        const { dragonId } = action.payload;
        state.dragons = state.dragons.map((dragon) =>
          dragon.dragon_id === dragonId ? { ...dragon, reserved: true } : dragon
        );
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
      })
      .addCase(joinMission.fulfilled, (state, action) => {
        const { missionId } = action.payload;
        state.missions = state.missions.map((mission) =>
          mission.mission_id === missionId ? { ...mission, reserved: true } : mission
        );
      });
  },
});

export default {
  ...dragonMissionSlice,
  fetchDragons,
  reserveDragon,
  fetchMissions,
  joinMission,
};
