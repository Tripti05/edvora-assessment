import React, {useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort,  Filter, Page, Inject, Selection, Edit, Toolbar } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { productsGrid } from '../assests/data';

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
                 
        fetch("https://assessment.api.vweb.app/products")
            .then((res) =>
                res.json())

            .then(
                data => {
                    console.log(data);
                    setData(data);
                }
            );

    }, []);

    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     <Header category="Page" title="Products" />
     <GridComponent id="products" dataSource={data} allowPaging allowSorting selectionSettings={selectionsettings} toolbar={toolbarOptions} editSettings={editing} pageSettings={{pageSize:10}}>
     <ColumnsDirective>
          {productsGrid.map((item, index) => <ColumnDirective {...item} key={index}  />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, Selection, Toolbar, Edit]} />
     </GridComponent>
    </div>
  );
};

export default Products;
