import React from 'react';
import { jsonServerRestClient, Admin, Resource,simpleRestClient, fetchUtils } from 'admin-on-rest';
import { UserList } from './users';
import { PostList,PostEdit,PostCreate } from './posts';
import { CommentList } from './comments'
import { Delete } from 'admin-on-rest';
import Dashboard from './Dashboard';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import authClient from './authClient';
import APIClient from './restClient'
import { auth } from 'admin-on-rest/lib/sideEffect/saga';

const App = () => (
    <Admin restClient={APIClient} authClient={authClient} dashboard={Dashboard} >
       
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
         <Resource name="comments" list={CommentList} />*/ }
        <Resource name="employee" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;