import React, { useEffect, useState } from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, ColumnSeries, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { GoPrimitiveDot } from 'react-icons/go';

const StackedLine = () => {

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

    const primaryxAxis = { valueType: 'Category', title: 'Products ID' };
    const primaryyAxis = { title: 'Stock & Selling Price' };

  return (

    <div>


      <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-blue-300  hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Stock</span>
          </p>
          <p className="flex items-center gap-2 text-gray-600  hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Selling Price</span>
          </p>
    ` </div>


      <ChartComponent title='Products Data' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} tooltip={{enable:true}}  >
        <Inject services={[LineSeries, Category, ColumnSeries, Legend,  Tooltip]}/>
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName="product_id" type="Column" yName="stock"></SeriesDirective>
            <SeriesDirective dataSource={data} xName="product_id" type="Column" yName="selling_price"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default StackedLine;
