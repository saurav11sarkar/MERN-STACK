import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Student 1', math: 78, physics: 82, chemistry: 75 },
        { id: 2, name: 'Student 2', math: 85, physics: 88, chemistry: 84 },
        { id: 3, name: 'Student 3', math: 92, physics: 91, chemistry: 89 },
        { id: 4, name: 'Student 4', math: 67, physics: 70, chemistry: 65 },
        { id: 5, name: 'Student 5', math: 80, physics: 85, chemistry: 79 },
        { id: 6, name: 'Student 6', math: 74, physics: 78, chemistry: 72 },
        { id: 7, name: 'Student 7', math: 88, physics: 90, chemistry: 85 },
        { id: 8, name: 'Student 8', math: 91, physics: 94, chemistry: 90 },
        { id: 9, name: 'Student 9', math: 70, physics: 73, chemistry: 68 },
        { id: 10, name: 'Student 10', math: 82, physics: 86, chemistry: 80 }
    ];
    

    return (
        <div>
            <LChart width={700} height={400} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;