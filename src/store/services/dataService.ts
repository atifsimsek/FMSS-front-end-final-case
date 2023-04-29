import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Props {
  category: string;
  page: number;
}

export const fetchData = createAsyncThunk(
  'fetch/books',
  async ({ category = 'starships', page = 1 }: Props): Promise<any> => {
    try {
      const response = await axios(
        `https://swapi.dev/api/${category}/?page=${page.toString()}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.resolve(); // or return Promise.resolve(undefined);
    }
  }
);
