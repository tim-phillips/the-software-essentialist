type UserData = {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};

type CreateUserSuccess = {
  data: UserData;
  error?: undefined;
  success: true;
};

type CreateUserError = {
  data: undefined;
  error: string;
  success: false;
};

export function generateUserSuccess(user: UserData): CreateUserSuccess {
  return {
    data: {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    error: undefined,
    success: true,
  };
}

export function generateUserError(errorName: string): CreateUserError {
  return {
    error: errorName,
    data: undefined,
    success: false,
  };
}
