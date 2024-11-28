import Header from "./components/layout/Header";
import MetricCard from "./components/layout/dashboard/MetricCard";
import PerformanceChart from "./components/layout/dashboard/PerformanceChart";
import InterviewTable from "./components/layout/dashboard/InterviewTable";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import FollowUpTable from "./components/layout/dashboard/FollowUptable";


const metrics = {
  profileSubmission: 0,
  interviewAttended: 0,
  shortlisted: 0,
  joined: 0,
  joinedValue: 0,
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          {/* Metrics Section */}
          <MetricCard metrics={metrics} />

          {/* Flex Container for Performance Chart and Schedule Board */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 w-full">
            {/* Left Column: Performance Chart */}
            <Card className="flex-1">
              <CardHeader className="flex justify-between items-center">
                <CardTitle>
                  <div className="inline-block bg-red-600 text-white px-4 py-2 rounded">
                    Zone: D
                  </div>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Month Wise</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Current Month</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <PerformanceChart />
              </CardContent>
            </Card>

            {/* Right Column: Schedule Board */}
            <div className="flex flex-col flex-1">
              {/* Schedule Board */}
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Schedule Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">
                    Position Name Scheduled
                  </h3>
                  {/* Schedule content would go here */}
                </CardContent>
              </Card>

              {/* Additional Section: Placed Below the Schedule Board */}
              <div className="mt-6 w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Section</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Content for the additional section.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="space-y-6">
            <InterviewTable />
            <FollowUpTable />
          </div>
        </div>

        {/* Live Notification Section */}
        <div className="fixed top-16 right-4 w-80">
          <Card>
            <CardHeader>
              <CardTitle>Live Notification</CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              {/* Notification content would go here */}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default App;
