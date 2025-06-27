import axios from 'axios';
import { Idea } from '../interfaces/Idea';

const api = axios.create({
  baseURL: 'http://localhost:3001/ideas'
});

export const getIdeas = async (filters?: { category?: string; status?: string }) => {
  const params = new URLSearchParams(filters);
  const res = await api.get(`/?${params}`);
  return res.data;
};

export const createIdea = async (idea: Idea) => (await api.post('/', idea)).data;
export const updateIdea = async (id: string, idea: Idea) => (await api.put(`/${id}`, idea)).data;
export const deleteIdea = async (id: string) => (await api.delete(`/${id}`)).data;