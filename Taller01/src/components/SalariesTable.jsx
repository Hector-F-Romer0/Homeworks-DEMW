import React from "react";

const SalariesTable = ({ data }) => {
	const generateIncrease = (salary) => {
		return (salary * 1.08).toFixed(3);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Valor</th>
					<th>Aumento</th>
				</tr>
			</thead>
			<tbody>
				{data.map((value, index) => (
					<tr key={index}>
						<td>Producto {index + 1}</td>
						<td>{value}</td>
						<td>{generateIncrease(value)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SalariesTable;
