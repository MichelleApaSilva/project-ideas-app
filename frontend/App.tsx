import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';

function App() {
  return (
    <div>
      <h1>Gerenciador de Ideias</h1>
      <IdeaForm onSuccess={() => window.location.reload()} />
      <IdeaList />
    </div>
  );
}

export default App;