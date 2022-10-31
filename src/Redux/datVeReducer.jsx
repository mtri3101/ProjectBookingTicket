import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  danhSachGheDangDat: [
  ]
}

const DatVeReducer = createSlice({
  name: 'DatVeReducer',
  initialState,
  reducers: {
    datGheAction: (state, action) => {
      let gheDangChon = action.payload;
      let index = state.danhSachGheDangDat.findIndex(ghe => ghe.soGhe === gheDangChon.soGhe)
      //Không tìm thấy
      if (index === -1) {
        state.danhSachGheDangDat.push(gheDangChon)
      } else {
        //Đã có trong mảng
        state.danhSachGheDangDat.splice(index, 1)
      }
    },
    huyGheAction: (state,action) =>{
      let gheHuy = action.payload;
      let index = state.danhSachGheDangDat.findIndex(ghe => ghe.soGhe === gheHuy.soGhe);
      if(index !== -1){
        state.danhSachGheDangDat.splice(index,1)
      }
    }
  }
});

export const { datGheAction,huyGheAction } = DatVeReducer.actions

export default DatVeReducer.reducer