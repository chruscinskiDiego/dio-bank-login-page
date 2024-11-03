export const useLogin = () => {
  
  const login = async (email: string): Promise<boolean> => {

    if (!email) {
      alert('Email não preenchido!');
      return false;
    }

    return true;

  };

  return { login };
};
