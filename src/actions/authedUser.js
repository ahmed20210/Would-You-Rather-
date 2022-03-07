export const SET_AUTHED_USER = "AUTHED_USER";
export const RESET_AUTHED_USER = "REST_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function reSetAuthedUser(id) {
  return {
    type: RESET_AUTHED_USER,
  };
}