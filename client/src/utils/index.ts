import axios from "axios";
import { ApiCall, ApiResponse } from "../types";

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

const generateUniqueId = () => {
  const firstRandomNumber = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const secondRandomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  const firstLetter = String.fromCharCode(firstRandomNumber).toUpperCase();
  const secondLetter = String.fromCharCode(secondRandomNumber).toUpperCase();

  return `${firstLetter}${secondLetter}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
};

export const handleApiError = (error: Error): ApiResponse => ({
  ok: false,
  result: null,
  error,
});

const handleApiSuccess = (result: object): ApiResponse => ({
  ok: true,
  result,
  error: undefined,
});

const calculateRem = (size: number): string => `${(size / 16) * 1}rem`;

const makeApiCall = async (params: ApiCall): Promise<ApiResponse> => {
  try {
    const { data: response } = await axios({
      ...params,
      headers: {
        accepts: "application/json",
      },
    });

    if (params.callBack) {
      params.callBack.apply(response);
    }

    return handleApiSuccess(response);
  } catch (error: any) {
    return handleApiError(error);
  }
};

const hexToRGB = (hex: string, alpha: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

export { calculateRem, generateUniqueId, hexToRGB, makeApiCall };
