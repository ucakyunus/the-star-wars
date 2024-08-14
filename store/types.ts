import { store } from "@/store";
import rootReducer from "@/store/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;