import React from "react";

const OneDimensionTable = ({ data, header }) => {
	return (
		<table>
			<thead>{header && header.map((title) => <th>{title}</th>)}</thead>
			<tbody>
				<tr>
					{data.map((num, index) => (
						<td key={index}>{num}</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};

export default OneDimensionTable;
