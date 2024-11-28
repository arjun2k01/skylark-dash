import { Card, CardContent } from "../../ui/card";

const MetricCard = ({ metrics }) => {
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-5 gap-4 text-center">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <span className="text-3xl font-semibold text-gray-700">
                {value}
              </span>
              <span className="text-sm text-blue-600 mt-1 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()} {/* Human-readable */}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
