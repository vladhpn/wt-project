import axios from '../axios/axios';

import {
  IIsUserResponseDTO,
  ILoginForm,
  ILoginResponseDTO,
  IRegistrationForm,
} from './types';

export const login = async (values: ILoginForm): Promise<ILoginResponseDTO> => {
  const { data } = await axios.post('/auth/login', values);

  return data.token;
};

export const registration = async (
  values: IRegistrationForm,
): Promise<ILoginResponseDTO> => {
  const { data } = await axios.post('/auth/register', values);

  return data.token;
};

export const isUser = async (): Promise<IIsUserResponseDTO> => {
  const data = await axios.post('/auth/register');

  return data.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
