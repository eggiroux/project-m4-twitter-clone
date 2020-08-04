import React from "react";

export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();
  const [isLoadingDone, setIsLoadingDone] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/me/profile");
      const user = await response.json();
      if (!isLoadingDone) {
        setCurrentUser(user.profile);
        setIsLoadingDone(true);
      }
    };
    fetchUser();
  }, [isLoadingDone]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoadingDone }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
