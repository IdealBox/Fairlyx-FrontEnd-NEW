// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { VendorNavbar, DashboardSideBar } from '../../components';
function VendorPage() {
	return (
		<div className="flex bg-gray-100 gap-1 fixed top-0 h-screen left-0 dark:bg-app-neutral-800 w-full">
			<DashboardSideBar />
			<div className="flex flex-col w-full">
				<VendorNavbar />
				<Outlet />
			</div>
		</div>
	);
}
export default VendorPage;
