import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const LineChartCanvas = document.getElementById(
      "LineChart"
    ) as HTMLCanvasElement;

    if (LineChartCanvas) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(LineChartCanvas, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Reach",
              data: [50, 80, 60, 100, 75, 120, 185, 110, 90, 140, 180, 160],
              borderColor: "#FF9500",
              backgroundColor: "rgba(255, 149, 0, 0.2)",
              borderWidth: 2,
              pointBackgroundColor: "#FF9500",
              pointRadius: 4,
              fill: true,
            },
            {
              label: "Paid Reach",
              data: [30, 50, 55, 70, 65, 110, 133, 100, 80, 120, 150, 140],
              borderColor: "#2AC49B",
              backgroundColor: "rgba(42, 196, 155, 0.2)",
              borderWidth: 2,
              pointBackgroundColor: "#2AC49B",
              pointRadius: 4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            tooltip: {
              enabled: true,
              backgroundColor: "#2AC49B",
              titleColor: "#FFFFFF",
              bodyColor: "#FFFFFF",
              displayColors: true,
              borderColor: "#2AC49B",
              borderWidth: 1,
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ${tooltipItem.raw}K`;
                },
              },
            },
            legend: {
              display: true,
              labels: {
                color: "#FFFFFF",
                usePointStyle: true,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Month",
                color: "#FFFFFF",
                font: { weight: "bold" },
              },
              ticks: {
                color: "#FFFFFF",
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: "Reach (K)",
                color: "#FFFFFF",
                font: { weight: "bold" },
              },
              ticks: {
                color: "#FFFFFF",
                callback: (value) => `${value}K`,
              },
              grid: {
                color: "#FFFFFF33",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-1 bg-[#1E6E33]">
      <div className="bg-[#1B7633] w-full h-[320px] rounded-[10px]">
        <canvas id="LineChart"></canvas>
      </div>
      <div className="flex flex-row space-x-[20px] mt-[20px] w-full">
        <div className="bg-[#1B7633] w-[700px] h-[260px] rounded-[10px] flex flex-col"></div>
        <div className="bg-[#1B7633] w-[272px] h-[260px] rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default LineChart;
