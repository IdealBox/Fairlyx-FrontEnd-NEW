import { Outlet } from 'react-router-dom';
import { VendorNavbar, DashboardSideBar } from '../../components';
function VendorPage() {
	return (
		<div className="h-screen flex bg-gray-100 gap-1 absolute top-0 left-0 dark:bg-app-neutral-800 w-full">
			<DashboardSideBar />
			<div className="grid grid-rows-[100px_1fr] w-full">
				<VendorNavbar />
				<div className="max-h-full overflow-y-scroll scrollbar-thin">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
export default VendorPage;
