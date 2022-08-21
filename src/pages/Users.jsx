import React, {useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Search, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { usersGrid } from '../assests/data';

const Users = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
                 
        fetch("https://assessment.api.vweb.app/users")
            .then((res) =>
                res.json())

            .then(
                data => {
                    console.log(data);
                    setData(data);
                }
            );

    }, []);

    const editing = { allowDeleting: true, allowEditing: true };
    const toolbarOptions = ['Search'];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     <Header category="Page" title="Users" />
     <GridComponent id="users" dataSource={data} allowPaging allowSorting toolbar={toolbarOptions} editSettings={editing} pageSettings={{pageSize:10}}>
     <ColumnsDirective>
          {usersGrid.map((item, index) => <ColumnDirective {...item} key={index}  />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Page, Search, Toolbar]} />
     </GridComponent>
    </div>
  );
};

export default Users;
