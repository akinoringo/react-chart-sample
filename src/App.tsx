// import React from 'react';
// import logo from './logo.svg';

// /**
//  * Rechartsを使ったサンプル
//  */
// import './App.css';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, {name: 'Page C', uv: 200, pv: 2400, amt: 2400}, {name: 'Page D', uv: 100, pv: 2400, amt: 2400}, {name: 'Page E', uv: 50, pv: 2400, amt: 2400}, {name: 'Page F', uv: 0, pv: 2400, amt: 2400}];

// function App() {
//   return (
//     <LineChart width={600} height={300} data={data}>
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//       <CartesianGrid stroke="#ccc" />
//       <XAxis dataKey="name" />
//       <YAxis />
//   </LineChart>
//   );
// }

// import React from "react";
// import { render } from "react-dom";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from "victory";

// const data2012 = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 19000}
// ];

// const data2013 = [
//   {quarter: 1, earnings: 15000},
//   {quarter: 2, earnings: 12500},
//   {quarter: 3, earnings: 19500},
//   {quarter: 4, earnings: 13000}
// ];

// const data2014 = [
//   {quarter: 1, earnings: 11500},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 20000},
//   {quarter: 4, earnings: 15500}
// ];

// const data2015 = [
//   {quarter: 1, earnings: 18000},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 15000},
//   {quarter: 4, earnings: 12000}
// ];


// const App = () => {
//   return (
//     <VictoryChart
//     domainPadding={20}
//     theme={VictoryTheme.material}
//   >
//     <VictoryAxis
//       tickValues={[1, 2, 3, 4]}
//       tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
//     />
//     <VictoryAxis
//       dependentAxis
//       tickFormat={(x) => (`$${x / 1000}k`)}
//     />
//     <VictoryStack>
//       <VictoryBar
//         data={data2012}
//         x="quarter"
//         y="earnings"
//       />
//       <VictoryBar
//         data={data2013}
//         x="quarter"
//         y="earnings"
//       />
//       <VictoryBar
//         data={data2014}
//         x="quarter"
//         y="earnings"
//       />
//       <VictoryBar
//         data={data2015}
//         x="quarter"
//         y="earnings"
//       />
//     </VictoryStack>
//   </VictoryChart>
//   );
// };

// import React from 'react';
// import { PieChart, Pie, Sector, Cell } from 'recharts';
// // import { useHistory } from 'react-router-dom';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// function App() {
//   // const history = useHistory();

//   const onPieEnter = (data, index) => {
//     // ここで遷移先のURLを設定します。例えば、データに基づく動的なURLも設定可能です。
//     console.log(data, index);
//   };

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={data}
//         cx={200}
//         cy={200}
//         labelLine={false}
//         label
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//         onClick={onPieEnter}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }

import React from 'react';
import { VictoryPie } from 'victory';
// import { useHistory } from 'react-router-dom';

function App() {
  // const history = useHistory();

  const data = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ];

  const handlePieClick = (event, { datum }) => {
    console.log("Clicked on:", datum.x);
    // ここで遷移先URLを指定
    // history.push('/' + datum.x.toLowerCase());
    console.log(event, datum);
  };

  return (
    <VictoryPie
      data={data}
      events={[{
        target: "data",
        eventHandlers: {
          onClick: handlePieClick
        }
      }]}
    />
  );
}

export default App;
