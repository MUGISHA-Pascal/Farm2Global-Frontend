import React, { useEffect, useRef } from "react";
import { IoPieChartOutline } from "react-icons/io5";
import { MdOutlineCrisisAlert } from "react-icons/md";

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
                color: "#CCD2E3",
                font: { weight: "normal" },
              },
              ticks: {
                color: "#CCD2E3",
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: "Reach (K)",
                color: "#CCD2E3",
                font: { weight: "normal" },
              },
              ticks: {
                color: "#CCD2E3",
                stepSize: 40,
                padding: 10,
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
      <div className="bg-[#1B7633]  h-[320px] rounded-[10px] w-full">
        <canvas id="LineChart"></canvas>
      </div>
      <div className="flex flex-row space-x-[20px] mt-[20px] w-full">
        <div className="bg-[#1B7633] w-[600px] h-[260px] rounded-[10px] flex flex-col">
          <div className="flex flex-row border-b-[1px] border-gray-400 space-x-[10px] items-center justify-start p-[10px]">
            <div className="bg-[#FF9933] p-[4px] rounded-full ">
              <IoPieChartOutline className="text-white" />
            </div>
            <h2 className="text-[18px] text-white font-bold">
              Sales Demography
            </h2>
          </div>
        </div>
        <div className="bg-[#1B7633] w-[372px] h-[260px] rounded-[10px] flex flex-col space-y-[10px] p-[10px]">
          <div className="flex flex-row border-b-[1px] border-gray-400 space-x-[10px] items-center justify-start p-[10px]">
            <div className="bg-[#FF9933] p-[4px] rounded-full ">
              <MdOutlineCrisisAlert className="text-white" />
            </div>
            <h2 className="text-[18px] text-white font-bold">
              Tips For Increasing Sales
            </h2>
          </div>
          <div className="scrollableDiv bg-[#2FA24D] flex flex-col space-y-[10px] rounded-[10px] text-left p-[10px] text-[10px] text-white h-[180px] overflow-y-auto">
            <p>
              <b>Showcase Reviews on Product Pages: </b> Add customer reviews
              and ratings directly on your product pages. Highlight the positive
              experiences customers have had with your products.
            </p>

            <p>
              <b>Social Proof:</b> Share customer testimonials and success
              stories on your website, social media, and email campaigns. This
              reinforces the value of your product and encourages others to buy.
            </p>

            <p>
              <b>Incentivize Reviews:</b> Offer a small discount or reward for
              customers who leave a review. This can boost engagement and
              provide you with more valuable feedback.
            </p>

            <p>
              <b>Respond to Reviews:</b> Whether the reviews are positive or
              negative, engage with customers by thanking them for their
              feedback. It shows that you care about customer satisfaction and
              helps build a loyal customer base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
