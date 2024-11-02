import Clock from './components/clock/Clock';
import './App.css';
import { useGetTimezonesQuery } from './store/Timezone/TimezoneApi';
import { Loader } from './components/loader/Loader';

function App() {
  const { data: timezones, isLoading, isError } = useGetTimezonesQuery();

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
  if (isError) return <div className="loader-container">Ошибка при загрузке данных</div>;
  if (!timezones) {
    return <div className="loader-container">Нет данных для отображения</div>;
  }

  return (
    <div className="app">
      {Array.from({ length: 2 }, (_, i) => (
        <Clock key={i} timezones={timezones} />
      ))}
    </div>
  );
}

export default App;
