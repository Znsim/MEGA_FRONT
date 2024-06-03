import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { useAuthStore } from "../../store/useAuthStore";

export const Logout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    // 실제 로그인 처리 로직
    logout();
    navigate(routes.login);
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
