const Analytics = () => {
  return (
    <div className="bg-gray-100 p-8 font-sans">
      {/* Weekly Progress Section */}
      <h2 className="text-2xl font-bold mb-6">Your weekly progress</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <ProgressCard name="Mango" growth="45%" color="bg-green-100" />
        <ProgressCard name="Pear" growth="55%" color="bg-yellow-100" />
        <ProgressCard name="Avocado" growth="94%" color="bg-green-200" />
        <ProgressCard name="Carrot" growth="82%" color="bg-orange-100" />
      </div>

      {/* Predictive Analysis */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">Predictive analysis</h3>
          {/* Placeholder for graph */}
          <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-600 text-sm">Graph Placeholder</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">
            It's the perfect day for spraying
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">4.39 °C</span>
              <span className="font-medium text-gray-800">
                Real-time soil temperature
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">pH 7</span>
              <span className="font-medium text-gray-800">
                Real-time soil pH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality, Soil Moisture, Land Fertility */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <InfoCard title="Air quality" value="95%" />
        <InfoCard title="Soil Moisture" value="21%" />
        <InfoCard title="Land Fertility" value="95%" />
      </div>

      {/* Weather Forecast */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WeatherCard date="12 September" temp="22°" condition="Mostly sunny" />
        <WeatherCard date="13 September" temp="26°" condition="Sunny" />
        <WeatherCard date="14 September" temp="19°" condition="Cloudy" />
        <WeatherCard date="15 September" temp="22°" condition="Mostly sunny" />
      </div>
    </div>
  );
};

// Progress Card Component
const ProgressCard: React.FC<{
  name: string;
  growth: string;
  color: string;
}> = ({ name, growth, color }) => (
  <div className={`p-4 rounded-lg shadow ${color} text-center`}>
    <div className="text-gray-700 text-lg font-medium">{name}</div>
    <div className="text-2xl font-bold mt-2">{growth} Growth</div>
  </div>
);

// Info Card Component
const InfoCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <div className="bg-white p-4 rounded-lg shadow text-center">
    <div className="text-gray-600 font-medium">{title}</div>
    <div className="text-xl font-bold mt-2">{value}</div>
  </div>
);

// Weather Card Component
const WeatherCard: React.FC<{
  date: string;
  temp: string;
  condition: string;
}> = ({ date, temp, condition }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <div className="text-gray-500 text-sm">{date}</div>
    <div className="text-2xl font-bold">{temp}</div>
    <div className="text-gray-600">{condition}</div>
  </div>
);

export default Analytics;
