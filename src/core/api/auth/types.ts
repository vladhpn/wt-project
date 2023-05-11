export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegistrationForm extends ILoginForm {
  fullName: string;
}

export interface ILoginResponseDTO {
  token: string;
}

export interface IIsUserResponseDTO {
  id: number;
  email: string;
  fullName: string;
}
