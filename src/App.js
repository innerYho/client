import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
// import PostCreate from './components/PostCreate'
// import PostEdit from './components/PostEdit'
// import UserList from './components/UserList'
// import UserCreate from './components/UserCreate'
// import UserEdit from './components/UserEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name="posts"
        list={PostList}
        // create={PostCreate}
        // edit={PostEdit}
      />
      {/* 24:50 */}
      {/* <Resource name="posts" list={PostList} create={PostCreate} /> */}
    </Admin>
  );
}

export default App;
