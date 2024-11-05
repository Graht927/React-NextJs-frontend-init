import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const DEFAULT_USER:API.UserVO = {
    userName: "未登录",
    userProfile:"暂无简介",
    userAvatar: "/assets/notLoginUser.png",
    userRole: "guest"
}
/**
 * 登录用户全局状态
 */
export const loginUserSlice = createSlice({
    name: "loginUser",
    initialState: DEFAULT_USER,
    reducers: {
        setLoginUser: (state, action: PayloadAction<API.UserVO>) => {
            return { ...action.payload };
        }
    }
})
//修改状态
export const {setLoginUser} = loginUserSlice.actions;
export default loginUserSlice.reducer;
