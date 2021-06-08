import Layout from '../components/Layout';
import './Admissions.css'

const Admissions = () => {
  
  return (
    <Layout title="Admissions">
      <h3>
        Fee Structure
      </h3>
      <table id='fee-structure'>
        <thead>
          <tr>
            <th>Days/Week	</th>
            <th>Duration</th>
            <th>Classes/Month	</th>
            <th>Fee/Month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 Days</td>
            <td>30 min</td>
            <td>12</td>
            <td>US$ 60.00</td>
          </tr>
          <tr>
            <td>6 Days</td>
            <td>30 min</td>
            <td>24</td>
            <td>US$ 120.00</td>
          </tr>
          <tr>
            <td>2 Days</td>
            <td>30 min</td>
            <td>8-10</td>
            <td>US$ 40.00</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Admissions;
