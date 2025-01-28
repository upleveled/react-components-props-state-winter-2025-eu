import { useState } from 'react';

const people = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ege',
      last: 'Yalçın',
    },
    location: {
      city: 'Muş',
      state: 'Kırıkkale',
      country: 'Turkey',
    },
    email: 'ege.yalcin@example.com',
    uuid: '5d2d79e1-26e1-48ed-ad8f-9bce524ee2ee',
    picture: 'https://randomuser.me/api/portraits/med/men/90.jpg',
  },
];

export default function ExampleArrayOfObjects() {
  const [users, setUsers] = useState(people);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`user-profile-${user.uuid}`}>
            <img src={user.picture} alt="user pic" width={200} />
            <div>
              {user.name.title} {user.name.first} {user.name.last}
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          const newUserId = users[users.length - 1].uuid + 1;

          const newUser = {
            gender: 'female',
            name: {
              title: 'Ms',
              first: 'Antonija',
              last: 'Obradović',
            },
            location: {
              city: 'Pančevo',
              state: 'South Bačka',
              country: 'Serbia',
            },
            email: 'antonija.obradovic@example.com',
            uuid: newUserId,
            picture: 'https://randomuser.me/api/portraits/med/women/71.jpg',
          };
          // Don't do this!!
          // users.push(newUser);
          // console.log(users);
          // setUsers(users);

          // Do this!
          // 1. create a copy of the current state
          // const newUsers = [...users]; // use spread operator
          // 2. Update the copy of the old state
          // newUsers.push(newUser);
          // 3. set state to the copy of the old array
          // setUsers(newUsers);
          setUsers([...users, newUser]);
        }}
      >
        New User
      </button>
      <button
        onClick={() => {
          // 1. create copy of the current state
          const newUsers = [...users];
          // 2. update the copy created in step 1
          newUsers[0].name.first = 'Lukas';
          // 3. Set state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Set First user name to Lukas
      </button>
      <button
        onClick={() => {
          // 1. create copy of the current state
          const newUsers = [...users];
          // 2. update the copy created in step 1
          newUsers.pop();
          // 3. Set state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Delete the last User
      </button>
    </div>
  );
}
