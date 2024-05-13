import { useAuthStore } from "../../store/useAuthStore";

export const Logout = () => {
  const { logout } = useAuthStore();
  const handleLogout = () => {
    // 실제 로그인 처리 로직
    logout();
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
