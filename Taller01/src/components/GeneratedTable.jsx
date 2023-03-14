import React, { useEffect, useState } from "react";

const GeneratedTable = ({ tableSize }) => {
	const [cells, setCells] = useState([]);

	const generateCells = () => {
		for (let index = 1; index <= tableSize.rows; index++) {
			console.log(index);
		}
	};

	useEffect(() => {
		console.log(tableSize);
		generateCells();
	}, [tableSize]);

	return (
		<table>
			<thead>
				{/* {generateCells()} */}
				<tr>
					<th>Hola</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Hola</td>
				</tr>
			</tbody>
		</table>
	);
};

export default GeneratedTable;
