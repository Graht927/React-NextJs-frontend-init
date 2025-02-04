import {configureStore} from "@reduxjs/toolkit";
import loginUser from "@/stores/loginUser";

const store = configureStore({
    reducer: {
        //这里存放状态
        loginUser,
    }
});
//类型推断与提示
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
