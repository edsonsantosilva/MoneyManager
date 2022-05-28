import incomeImage from "assets/income.svg"
import outcomeImage from "assets/outcome.svg"
import totalImage from "assets/total.svg"
import { Container } from "./styles";

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Incomes</p>
					<img src={incomeImage} alt="incomes" />
				</header>
				<strong>$ 1000.00</strong>
			</div>
			<div>
				<header>
					<p>Expenses</p>
					<img src={outcomeImage} alt="expenses" />
				</header>
				<strong>-$ 700.00</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Balance</p>
					<img src={totalImage} alt="balance" />
				</header>
				<strong>$ 300.00</strong>
			</div>
		</Container>
	)
}