import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function PagesToRead() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    fetch('book.json')
      .then(res => res.json())
      .then(data => setdatas(data));
  }, []);

  return (
    <>
    <Helmet>
      <title>Book || Page To Read</title>
    </Helmet>
    <div className="w-full flex justify-center items-center p-4 m-auto">
      <div className="w-full lg:w-4/5 xl:w-3/5 m-auto">
        <BarChart
          width={1000}  // Adjust as per your needs
          height={400}
          data={datas}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="author" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
    </>
    
  );
}

export default PagesToRead;
