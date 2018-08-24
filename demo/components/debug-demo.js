/*eslint-disable no-magic-numbers */

import React from "react";
import { VictoryChart } from "../../packages/victory-chart/src/index";
import { VictoryStack } from "../../packages/victory-stack/src/index";
import { VictoryGroup } from "../../packages/victory-group/src/index";
import { VictoryBar } from "../../packages/victory-bar/src/index";
import { VictoryArea } from "../../packages/victory-area/src/index";
import { VictoryScatter } from "../../packages/victory-scatter/src/index";
import { VictoryPortal } from "../../packages/victory-core/src/index";
import { VictorySelectionContainer } from "../../packages/victory-selection-container/src/index";
import { VictoryVoronoiContainer } from "../../packages/victory-voronoi-container/src/index";
import { VictoryZoomContainer } from "../../packages/victory-zoom-container/src/index";
import { range, random } from "lodash";

const lowToHigh = [
  { x: "low", y: "first", sort: 1 },
  { x: "med", y: "second", sort: 2 },
  { x: "high", y: "third", sort: 3 }
];

const highToLow = [
  { x: "low", y: "first", sort: 3 },
  { x: "med", y: "second", sort: 2 },
  { x: "high", y: "third", sort: 1 }
];

class App extends React.Component {
  getBarData() {
    return range(5).map(() => {
      return [
        {
          x: "apples",
          y: 3
        },
        {
          x: "bananas",
          y: 5
        },
        {
          x: "oranges",
          y: 7
        }
      ];
    });
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    };
    const chartStyle = { parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "40%" } };
    return (
      <div style={containerStyle}>


        <VictoryChart style={chartStyle} domainPadding={{ x: 50 }}>
            <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
              <VictoryStack colorScale={"red"}>
                {this.getBarData().map((data, index) => {
                  return <VictoryBar horizontal key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"green"}>
                {this.getBarData().map((data, index) => {
                  return <VictoryBar horizontal key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {this.getBarData().map((data, index) => {
                  return <VictoryBar horizontal key={index} data={data}/>;
                })}
              </VictoryStack>
            </VictoryGroup>
          </VictoryChart>

      </div>
    );
  }
}

export default App;
