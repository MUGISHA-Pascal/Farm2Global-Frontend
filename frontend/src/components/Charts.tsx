import React, { useEffect, useRef } from "react";
import { IoPieChartOutline } from "react-icons/io5";
import { MdOutlineCrisisAlert } from "react-icons/md";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  DoughnutController,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartTypeRegistry,
} from "chart.js";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef<Chart | null>(null);
  const donutRef = useRef<Chart<"doughnut"> | null>(null);

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
          maintainAspectRatio: false,
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
    const DonutChart = document.getElementById(
      "DonutChart"
    ) as HTMLCanvasElement;
    if (donutRef.current) {
      donutRef.current.destroy();
    }
    donutRef.current = new Chart<"doughnut">(DonutChart, {
      type: "doughnut",
      data: {
        labels: ["Tanzania", "Rwanda", "Uganda", "Kenya", "Burundi"],
        datasets: [
          {
            data: [21, 64, 18, 5, 5],
            backgroundColor: [
              "#FF4081",
              "#FF9500",
              "#2AC49B",
              "#7C4DFF",
              "#7E57C2",
            ],
            borderColor: "#FFFFFF",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}K`,
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-1 bg-[#1E6E33]">
      <div className="bg-[#1B7633] p-[10px] h-[320px] rounded-[10px] w-full relative">
        <canvas id="LineChart"></canvas>
        <p className="absolute top-[480px] left-[77px] text-white font-bold">
          Countries
        </p>
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
          <div className=" p-[4px] px-[20px] w-full flex flex-row space-x-[90px] items-center justify-center">
            <div className="w-[195px] h-[195px]">
              <canvas id="DonutChart"></canvas>
            </div>

            <div className="ml-10 px-[20px] py-[5px] text-[10px] rounded-[10px] flex flex-col space-y-[7px] bg-[#25883F] w-[400px] text-white">
              <h3 className="text-[13px] font-semibold">Audience by Country</h3>
              <ul className="flex flex-col space-y-[9px]">
                <li className="flex flex-row space-x-[70px] items-center my-1">
                  <div className="flex flex-row space-x-[15px] items-center">
                    <span className="w-2 h-2 bg-[#FF4081] rounded-full mr-2"></span>
                    <p>Tanzania</p>
                  </div>
                  <div className="flex flex-row space-x-[35px] items-center">
                    <span>21K</span>{" "}
                    <div className="text-[#FF9933] w-[25px] flex flex-row items-center justify-center h-[25px] p-[4px] font-bold bg-[#E6F2FE] rounded-full">
                      <span className="ml-auto ">27%</span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row space-x-[70px] items-center my-1">
                  <div className="flex flex-row space-x-[15px] items-center">
                    <span className="w-2 h-2 bg-[#FF9500] rounded-full mr-2"></span>
                    <p>Rwanda</p>
                  </div>{" "}
                  <div className="flex flex-row space-x-[35px] items-center">
                    <span>64K</span>
                    <div className="text-[#FF9933] w-[25px] flex flex-row items-center justify-center h-[25px] p-[4px] font-bold bg-[#E6F2FE] rounded-full">
                      <span className="ml-auto">40%</span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row space-x-[73px] items-center my-1">
                  <div className="flex flex-row space-x-[15px] items-center">
                    <span className="w-2 h-2 bg-[#2AC49B] rounded-full mr-2"></span>
                    <p>Uganda</p>
                  </div>{" "}
                  <div className="flex flex-row space-x-[35px] items-center">
                    <span>18K</span>
                    <div className="text-[#FF9933] w-[25px] flex flex-row items-center justify-center h-[25px] p-[4px] font-bold bg-[#E6F2FE] rounded-full">
                      <span className="ml-auto">16%</span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row space-x-[85px] items-center my-1">
                  <div className="flex flex-row space-x-[15px] items-center">
                    <span className="w-2 h-2 bg-[#7C4DFF] rounded-full mr-2"></span>
                    <p>Kenya</p>
                  </div>{" "}
                  <div className="flex flex-row space-x-[35px] items-center">
                    <span>5K</span>
                    <div className="text-[#FF9933] w-[25px] flex flex-row items-center justify-center h-[25px] p-[4px] font-bold bg-[#E6F2FE] rounded-full">
                      <span className="ml-auto">8%</span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row space-x-[77px] items-center my-1">
                  <div className="flex flex-row space-x-[15px] items-center">
                    <span className="w-2 h-2 bg-[#7E57C2] rounded-full mr-2"></span>
                    <p>Burundi</p>
                  </div>
                  <div className="flex flex-row space-x-[35px] items-center">
                    <span>5K</span>
                    <div className="text-[#FF9933] w-[25px] flex flex-row items-center justify-center h-[25px] p-[4px] font-bold bg-[#E6F2FE] rounded-full">
                      <span className="ml-auto">8%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
          <div className="bg-[#25883F] p-[7px] py-1 rounded-[10px]">
            <div className="scrollableDiv bg-[#25883F] flex flex-col space-y-[20px] rounded-[10px] text-left p-[10px] text-[10px] text-white h-[180px] overflow-y-auto">
              <p>
                <b>Showcase Reviews on Product Pages: </b> Add customer reviews
                and ratings directly on your product pages. Highlight the
                positive experiences customers have had with your products.
              </p>

              <p>
                <b>Social Proof:</b> Share customer testimonials and success
                stories on your website, social media, and email campaigns. This
                reinforces the value of your product and encourages others to
                buy.
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
    </div>
  );
};

export default LineChart;
