import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961212',
  'gender': '남',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '최대원',
  'birthday': '961212',
  'gender': '남',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '박호찬',
  'birthday': '961212',
  'gender': '남',
  'job': '대학생'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
