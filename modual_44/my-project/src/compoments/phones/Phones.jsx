import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(response => {
        const phoneData = response.data.data;
        const phoneWithPrice = phoneData.map(phone => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1]) || 0
          };
          return obj;
        });
        console.log(phoneWithPrice);
        setPhone(phoneWithPrice);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />}
      <h2 className="text-5xl mb-4">Phones: {phone.length}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={phone}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Phones;
