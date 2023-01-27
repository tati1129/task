import Header from "../Header/Header"
import Content from '../Content/Content';
import Total from "../Total/Total"
import s from "./style.module.css"


const App = () => {
  const course = 'Frontend Pro';
  const part1 = 'Вводные занятия по React'
  const tasks1 = 10;
  const part2 = 'Использование React хуков'
  const tasks2 = 5;
  const part3 = 'Использование библиотеки react-router-dom'
  const tasks3 = 15;
  return (
    <div className={s.contain}>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} tasks1={tasks1} tasks2={tasks2} tasks3={tasks3}/>
      <Total  tasks1={tasks1} tasks2={tasks2} tasks3={tasks3}/>
    </div>
  );
}

export default App;

//состояние - данные (переменные), с которыми работает и от которых зависит компонент
//компонет - это ф-ция, которая возвращает нам jsx
