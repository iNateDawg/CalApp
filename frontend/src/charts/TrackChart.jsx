import React from 'react'
import './TrackChart.scss'
import TableRows from '../components/TableRows'

const TrackChart = () => {
	const columnHeaders = ['Food', 'Protein', 'Carbs', 'Fat', 'Calories']

	const [rowsData, setRowsData] = React.useState(columnHeaders)

	// eslint-disable-next-line no-unused-vars
	const [titles, setTitles] = React.useState(columnHeaders)

	const addTableRows = () => {
		const rowsInput = {
			food: '',
			protein: '',
			carbs: '',
			fat: '',
			calories: ''
		}
		setRowsData([...rowsData, rowsInput])
	}
	const deleteTableRows = (index) => {
		const rows = [...rowsData]
		rows.splice(index, 1)
		setRowsData(rows)
	}

	const handleChange = (index, evnt) => {
		const { name, value } = evnt.target
		const rowsInput = [...rowsData]
		rowsInput[index][name] = value
		setRowsData(rowsInput)
	}
	return (

		<div className="tracking-chart">
			<div className="row">
				<div className="col-sm-8">
					<table className="cell-wrapper">
						<thead>
							<tr className='title-wrapper'>
								<th className='title'>Protein</th>
								<th className='title'>Fat</th>
								<th className='title'>Carbs</th>
								<th className='title'>Fat</th>
								<th className='title'>Calories</th>
								<th ><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
							</tr>
						</thead>
						<tbody>
							<TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
						</tbody>
					</table>
				</div>
				<div className="col-sm-3">
				</div>
			</div>
		</div>
	)
}

export default TrackChart
