
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const InterviewTable = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interview Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2">SL.No</th>
                <th className="px-4 py-2">Interview Date</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Client Name</th>
                <th className="px-4 py-2">Current CTC</th>
                <th className="px-4 py-2">Expected CTC</th>
              </tr>
            </thead>
            <tbody>
              {/* Add dummy data or real data here */}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
export default InterviewTable;