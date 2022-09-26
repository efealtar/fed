import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const API_KEY ='84a1f28189264d7889171a102ddde5a7'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({q, c, d}:{q:any, c:string, d: string[]}) => {
    const queryArea = `${q}` === '' ? 'top-headlines?country=us' : `everything?q=${q}`;
    const categoryArea = `${c}` !== '' &&  `${q}` === '' ? `&category=${c}` : '';
    
    let URL = `${d}` === '' ? `https://newsapi.org/v2/${queryArea}${categoryArea}&apiKey=${API_KEY}` : `https://newsapi.org/v2/everything?domains=${d}&apiKey=${API_KEY}`;
    console.log(URL)
    const response = await fetch(URL);
    try {
      const data = await response.json();
      return data;
    }catch(error){
      console.log(error);
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'idle';
        state.news = action.payload.articles;
      });
  }
});

export default newsSlice.reducer;
