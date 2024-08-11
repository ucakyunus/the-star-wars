import { store } from "@/redux/store";
import rootReducer from "@/redux/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;