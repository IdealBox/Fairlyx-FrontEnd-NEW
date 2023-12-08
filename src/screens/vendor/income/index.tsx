import { useSearchParams } from "react-router-dom";
import Earning from "./Earning";
import Refunds from "./Refunds";
import Statements from "./Statements";
import Payouts from "./Payouts";

const Income = () => {
    const [searchParams] = useSearchParams();
    switch (searchParams.get('tab')) {
		case 'earning':
			return <Earning />;
		case 'refunds':
			return <Refunds />;
		case 'statements':
			return <Statements />;
		case 'payouts':
			return <Payouts />;
		default:
			return <Earning />;
	}
};

export default Income;
