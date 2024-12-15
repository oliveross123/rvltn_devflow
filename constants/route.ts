const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;

// Making this because of re-usability,
// EXAMPLE: of usage :  redirect(ROUTES.SIGN_IN) less error prone
