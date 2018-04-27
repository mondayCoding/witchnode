
//libs
import * as React from 'react';

//components
import Input from '../components/input';
import Announcement from '../controllers/announcement/announcement';

export default class Homepage extends React.Component {
   public render() {
      return (
        <div className="page">
            <Announcement message="welcome to homepage"/>
            <h1>this form testpage</h1>
            <p>it has very litle in terms of content</p>
            <form method="post" action="">

                <Input id="task-name" label="Add task" name="task_name"/>
                <Input id="task-desc" label="Add task description" name="task_desc"/>

                <Input id="id1" label="Best language?" name=""/>
                <Input id="id2" label="Favourite color" name=""/>
                <Input id="id3" label="Cats or dogs" name=""/>

                <input type="submit"/>

            </form>
        </div>);
   }
}
