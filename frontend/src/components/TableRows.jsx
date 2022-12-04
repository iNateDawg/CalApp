import React from 'react'

const TableRows = ({ rowsData, deleteTableRows, handleChange }) => {
	const rowData = [...rowsData]
	return (
		rowData.map((data, index) => {
			const { food, protein, fat, carbs, calories } = data
			return (

				<tr key={index}>
					<td>
						<input type="text" value={food} onChange={(evnt) => { return (handleChange(index, evnt)) }} name="food" className="form-control"/>
					</td>
					<td>
						<input type="text" value={protein} onChange={(evnt) => { return (handleChange(index, evnt)) }} name="protein" className="form-control"/>
					</td>
					<td>
						<input type="text" value={carbs} onChange={(evnt) => { return (handleChange(index, evnt)) }} name="carbs" className="form-control" />
					</td>
					<td>
						<input type="text" value={fat} onChange={(evnt) => { return (handleChange(index, evnt)) }} name="fat" className="form-control" />
					</td>
					<td>
						<input type="text" value={calories} onChange={(evnt) => { return (handleChange(index, evnt)) }} name="calories" className="form-control" />
					</td>

					<td>
						<button className="btn btn-outline-danger" onClick={() => { return (deleteTableRows(index)) }}>x</button>
					</td>
				</tr>

			)
		})
	)
}

export default TableRows
