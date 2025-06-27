import { useEffect, useState } from 'react';
import { deleteIdea, getIdeas } from '../services/api';
import { Idea } from '../interfaces/Idea';

export default function IdeaList() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [filters, setFilters] = useState({ category: '', status: '' });

  const fetchIdeas = async () => {
    try {
      const data = await getIdeas(filters);
      setIdeas(data);
    } catch {
      alert('Erro ao carregar ideias.');
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, [filters]);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    await deleteIdea(id);
    fetchIdeas();
  };

  return (
    <div>
      <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
        <option value="">Todas categorias</option>
        <option value="negócios">Negócios</option>
        <option value="tecnologia">Tecnologia</option>
      </select>

      <select onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
        <option value="">Todos status</option>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluído">Concluído</option>
      </select>

      <ul>
        {ideas.map((idea) => (
          <li key={idea.id}>
            <strong>{idea.title}</strong> - {idea.category} - {idea.status}
            <button onClick={() => handleDelete(idea.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}