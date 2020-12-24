import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SideBarState {
  sideBarCollapsed: boolean;
}

const INITIAL_SIDEBAR_STATE: SideBarState = {
  sideBarCollapsed: false,
};

const INITIAL_STATE = {
  sideBar: INITIAL_SIDEBAR_STATE,
};

export type CommonState = typeof INITIAL_STATE;

const commonSlice = createSlice({
  name: "common",
  initialState: INITIAL_STATE,
  reducers: {
    setSideBarCollapsed(state, action: PayloadAction<SideBarState>) {
      const currentSideBarStatus = state.sideBar.sideBarCollapsed;
      console.log("fsd");
      state.sideBar = {
        ...action.payload,
        sideBarCollapsed: !currentSideBarStatus,
      };
    },
  },
});

const { actions, reducer } = commonSlice;

export const { setSideBarCollapsed } = actions;

export default reducer;
