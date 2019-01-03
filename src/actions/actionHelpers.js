export const buildGoogleUser = user => {
  let profile = user.getBasicProfile();
  return {
    data: {
      user: {
        id: profile.getId(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl(),
        name: profile.getName()
      }
    }
  };
};
