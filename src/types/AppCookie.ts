/**
 * Cookie for application
 * @author treetips
 */
export const AppCookie = {
  language: {
    name: "language",
  },
  theme: {
    name: "theme",
    expired: 60 * 60 * 30,
  },
  accessToken: {
    name: "accessToken",
  },
} as const;
