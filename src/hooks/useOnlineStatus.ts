import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setOnlineStatus } from "../store/features/uiSlice";

// Optional: Install @react-native-community/netinfo for network detection
// For now, we'll assume online status
export const useOnlineStatus = (): boolean => {
  const dispatch = useAppDispatch();
  const isOnline = useAppSelector(state => state.ui.isOnline);

  useEffect(() => {
    // Try to use NetInfo if available, otherwise assume online
    try {
      const NetInfo = require("@react-native-community/netinfo");
      const unsubscribe = NetInfo.default.addEventListener((state: any) => {
        dispatch(setOnlineStatus(state.isConnected ?? true));
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      // NetInfo not installed, assume online
      dispatch(setOnlineStatus(true));
    }
  }, [dispatch]);

  return isOnline;
};
