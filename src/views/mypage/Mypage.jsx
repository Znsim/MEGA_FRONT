import { useAuthStore } from "../../store/useAuthStore";
import { Logout } from "../login/Logout";

export const MyPage = () => {
  const { isAuthenticated, username } = useAuthStore();
  return (
    <>
      <p> {isAuthenticated ? username : "LOGIN"} 마이페이지</p>
      {isAuthenticated ? <Logout /> : null}
    </>
  );
};

//logout 버튼을 누르면 로그인 페이지로 넘어가기
