import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
// import '../../management/public'

const customer = [{
  'id' : 1,
  'image' : '../logo192.png',
  'name' : '이주성',
  'birthday' : '921106',
  'gender' : '남자',
  'job' : '대학생'
},{
  'id' : 2,
  'image' : '../logo192.png',
  'name' : '홍길동',
  'birthday' : '881206',
  'gender' : '남자',
  'job' : '의적'
},{
  'id' : 3,
  'image' : '../logo192.png',
  'name' : '이순신',
  'birthday' : '8405154',
  'gender' : '남자',
  'job' : '장군'
}]

function App() {
  return (
    <div>
      {customer.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              >
            </Customer>
          );
        })}
    </div>
  );
}

export default App;
