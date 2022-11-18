import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteField,
  DeleteWithUndoButton,
  DeleteButton,
  EditButton,
} from 'react-admin';
const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="publishedAt" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};
export default PostList;
