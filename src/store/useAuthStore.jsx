import { create } from "zustand";

// 이전에 로컬 스토리지에서 상태를 불러오는 함수
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return {
        isAuthenticated: false,
        username: "",
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      isAuthenticated: false,
      username: "",
    };
  }
};

export const useAuthStore = create((set) => ({
  // 초기 상태를 로컬 스토리지에서 불러오기
  ...loadState(),

  login: (username, password) => {
    set({ isAuthenticated: true, username, password });
    // 로컬 스토리지에 로그인 상태 저장
    localStorage.setItem(
      "authState",
      JSON.stringify({ isAuthenticated: true, username })
    );
  },
  logout: () => {
    set({ isAuthenticated: false, username: "" });
    // 로컬 스토리지에서 로그인 상태 제거
    localStorage.removeItem("authState");
  },
}));
