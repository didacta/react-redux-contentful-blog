import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '2osl15v2lum6';
const API_TOKEN = 'Dsn0HR3s_tBowHiaSgiImgJjRBWOTxOFaPvrvgPEkyY';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=book&order=sys.createdAt`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
export function fetchPost(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}