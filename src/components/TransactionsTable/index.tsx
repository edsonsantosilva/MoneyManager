import { Container } from "./styles";

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Description</th>
						<th>Value</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Application Development</td>
						<td className="invoice">$ 4,000.00</td>
						<td>Development</td>
						<td>05/20/2022</td>
					</tr>
					<tr>
						<td>Rent</td>
						<td className="expense">-$ 1,500.00</td>
						<td>Basic</td>
						<td>05/30/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}

