import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  AUTH_TOKEN: "@matchsphere/auth_token",
  USER_DATA: "@matchsphere/user_data",
  THEME: "@matchsphere/theme",
  FAVOURITES: "@matchsphere/favourites",
  ONBOARDING_COMPLETE: "@matchsphere/onboarding_complete",
} as const;

export const storage = {
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error saving to storage:", error);
      throw error;
    }
  },

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("Error reading from storage:", error);
      return null;
    }
  },

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from storage:", error);
      throw error;
    }
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
      throw error;
    }
  },

  async multiGet(keys: string[]): Promise<Record<string, any>> {
    try {
      const pairs = await AsyncStorage.multiGet(keys);
      const result: Record<string, any> = {};

      pairs.forEach(([key, value]) => {
        if (value) {
          try {
            result[key] = JSON.parse(value);
          } catch {
            result[key] = value;
          }
        }
      });

      return result;
    } catch (error) {
      console.error("Error reading multiple items from storage:", error);
      return {};
    }
  },

  async multiSet(items: [string, any][]): Promise<void> {
    try {
      const pairs: [string, string][] = items.map(([key, value]) => [
        key,
        JSON.stringify(value),
      ]);
      await AsyncStorage.multiSet(pairs);
    } catch (error) {
      console.error("Error saving multiple items to storage:", error);
      throw error;
    }
  },
};
