import React from "react";

export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();
  const [isLoadingDone, setIsLoadingDone] = React.useState(false);
  const [userError, setUserError] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/me/profile");
        const user = await response.json();
        if (!isLoadingDone) {
          setCurrentUser(user.profile);
          setIsLoadingDone(true);
        }
      } catch (err) {
        console.log("caught!");
        setUserError(true);
        setIsLoadingDone(true);
      }
    };
    fetchUser();
  }, [isLoadingDone]);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoadingDone, userError, setIsLoadingDone }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
