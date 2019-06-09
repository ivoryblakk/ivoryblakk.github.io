import React from 'react';
import DonutChart from 'react-d3-donut';

const CodeWarsPieGraph = (props) => {
  const {codewarsUserData } = props;
 // const data = codewarsUserData
 //console.log('CodeWarsPieGraph',  props)
    return (
        <div>
         <DonutChart
     innerRadius={50}
     outerRadius={70}
     transition={false}
     svgClass="CodeWwarsPie"
     pieClass="pie"
     displayTooltip={true}
     strokeWidth={5}
     data={codewarsUserData} />
        </div>
    );

      
     
}

export default CodeWarsPieGraph;
