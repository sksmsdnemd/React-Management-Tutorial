import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



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
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </Paper>
  );
}

export default (App);
