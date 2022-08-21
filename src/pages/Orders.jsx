import React, {useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort,  Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { ordersGrid } from '../assests/data';

const Orders = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
                 
        fetch("https://assessment.api.vweb.app/orders")
            .then((res) =>
                res.json())

            .then(
                data => {
                    console.log(data);
                    setData(data);
                }
            );
                return () => {
                  // 1. api call cancel
                  // 2. setData([])
                }
    }, []);

    const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     <Header category="Page" title="Orders" />
     <GridComponent id="orders" dataSource={data} allowPaging allowSorting allowExcelExport allowPdfExport editSettings={editing} pageSettings={{pageSize:10}}>
     <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective {...item} key={index}  />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, PdfExport]} />
     </GridComponent>
    </div>
  );
};

export default Orders;
