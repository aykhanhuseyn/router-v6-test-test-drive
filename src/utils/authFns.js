export const Roles = {
  ADMIN: window.btoa("ADMIN"),
  USER: window.btoa("USER"),
};

export function auth(role = null) {
  if (Object.values(Roles).includes(role)) {
    localStorage.setItem("auth", role);
  } else {
    localStorage.removeItem("auth");
  }
  window.location.reload();
}

export function checkAuth() {
  return localStorage.getItem("auth");
}
