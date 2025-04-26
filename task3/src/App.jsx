import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';

export default function App() {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ 
    key: null,
    direction: 'asc'
  });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      // Для числовых полей
      if (key === 'id' || key === 'salary') {
        return direction === 'asc' 
          ? a[key] - b[key] 
          : b[key] - a[key];
      }
      
      // Для текстовых полей
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setTableData(sortedData);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Список сотрудников</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortConfig.key === 'id' && (
                sortConfig.direction === 'asc' ? '↑' : '↓'
              )}
            </th>
            <th onClick={() => handleSort('firstName')}>
              Имя {sortConfig.key === 'firstName' && (
                sortConfig.direction === 'asc' ? '↑' : '↓'
              )}
            </th>
            <th onClick={() => handleSort('lastName')}>
              Фамилия {sortConfig.key === 'lastName' && (
                sortConfig.direction === 'asc' ? '↑' : '↓'
              )}
            </th>
            <th onClick={() => handleSort('department')}>
              Отдел {sortConfig.key === 'department' && (
                sortConfig.direction === 'asc' ? '↑' : '↓'
              )}
            </th>
            <th onClick={() => handleSort('salary')}>
              Зарплата {sortConfig.key === 'salary' && (
                sortConfig.direction === 'asc' ? '↑' : '↓'
              )}
            </th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.salary.toLocaleString()} ₽</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}