// import axios from "axios";
// import { create } from "zustand";

// const sessionKey = "authToken";

// const loadSessionState = () => {
//   const token = sessionStorage.getItem(sessionKey);
//   return token
//     ? { isAuthenticated: true, token }
//     : { isAuthenticated: false, token: null };
// };

// export const useAuthStore = create((set) => ({
//   ...loadSessionState(),
//   username: "",

//   login: async (username, password) => {
//     try {
//       const response = await axios.post(
//         "http://203.241.228.51:8000/api/accounts/v1/login/",
//         {
//           username,
//           password,
//         }
//       );
//       const token = response.data.token;
//       sessionStorage.setItem(sessionKey, token);
//       set({ isAuthenticated: true, token, username });
//     } catch (error) {
//       console.error("Login failed:", error);
//       throw new Error("Login faild");
//     }
//   },

//   logout: () => {
//     sessionStorage.removeItem(sessionKey);
//     set({ isAuthenticated: false, token: null, username: "" });
//   },
// }));

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

export const useAuthStore = (set) => ({
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
});
