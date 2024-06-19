import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
// import '../../management/public'

const customer = {
  'id' : 1,
  'image' : '../logo192.png',
  'name' : '이주성',
  'birthday' : '921106',
  'gender' : '남자',
  'job' : '대학생'
}

function App() {
  return (
    <Customer 
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    ></Customer>
  );
}

export default App;
