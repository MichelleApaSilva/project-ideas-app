import { useState } from 'react';
import { Idea } from '../interfaces/Idea';
import { createIdea } from '../services/api';

export default function IdeaForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState<Idea>({ title: '', description: '', category: '', status: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createIdea(form);
      setForm({ title: '', description: '', category: '', status: '' });
      onSuccess();
    } catch (err) {
      alert('Erro ao criar ideia.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Título" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Descrição" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoria" required />
      <select name="status" value={form.status} onChange={handleChange} required>
        <option value="">Status</option>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluído">Concluído</option>
      </select>
      <button type="submit">Criar Ideia</button>
    </form>
  );
}