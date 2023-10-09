import { Outlet } from 'react-router-dom';
import { VendorNavbar, DashboardSideBar } from '../../components';
function DashboardHome() {
	return (
		<div className="flex bg-gray-100 dark:bg-neutral-700 w-full h-screen">
			<DashboardSideBar />
			<div className="flex flex-col w-full">
				<VendorNavbar />
				<div>
					{/* all other components */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}
export default DashboardHome;
