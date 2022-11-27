import { Bar } from "react-chartjs-2";
import Slider from "@mui/material/Slider";
import zonalData from "./zonal.json";
import { useState } from "react";
import { orange, blue } from "@mui/material/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Global Temperature Anamoly (°C compared to the 1951-1981 average)",
    },
  },
  scales: {
    yAxis: {
      min: -1,
      max: 1.5,
    },
  },
};

const labels = ["Global", "Nothern Hemisphere", "Southern Hemisphere"];

function getArrayElem(year: number) {
  if (year >= 1880 && year <= 2021) return zonalData[year - 1880];
  else return null;
}

function getDataByLabel(label: string, year: number) {
  if (label === "Global") return getArrayElem(year)?.Glob;
  else if (label === "Nothern Hemisphere") return getArrayElem(year)?.NHem;
  else if (label === "Southern Hemisphere") return getArrayElem(year)?.SHem;
  else return null;
}
function getBackgroundColor(param: string | number | undefined) {
  let anamoly = Number(param);
  const color = anamoly >= 0 ? orange : blue;
  if (anamoly < 0) anamoly *= -1;
  if (anamoly >= 0 && anamoly < 0.2) return color[200];
  if (anamoly >= 0.2 && anamoly < 0.5) return color[300];
  if (anamoly >= 0.5 && anamoly < 0.8) return color[400];
  else return color[500];
}
function App() {
  const [year, setYear] = useState(1880);
  const data = {
    labels,
    datasets: [
      {
        label: "Anamoly",
        data: labels.map((label) => getDataByLabel(label, year)),
        backgroundColor: [
          getBackgroundColor(getArrayElem(year)?.Glob),
          getBackgroundColor(getArrayElem(year)?.NHem),
          getBackgroundColor(getArrayElem(year)?.SHem),
        ],
      },
    ],
  };
  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Bar options={options} data={data} />
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          Year: {year}
        </div>
        {/* <div>{getArrayElem(year)?.Glob}</div> */}
        <Slider
          min={1880}
          max={2020}
          step={1}
          value={year}
          onChange={(event, newValue) => {
            if (typeof newValue === "number") setYear(newValue);
          }}
        />
      </div>
      <div>
        <Bar
          options={options}
          data={{
            labels: zonalData.map((item) => item.Year),
            datasets: [
              {
                label: "Temperature Anamoly",
                data: zonalData.map((item) => item.Glob),
                backgroundColor: zonalData.map((item) =>
                  getBackgroundColor(item.Glob)
                ),
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default App;
