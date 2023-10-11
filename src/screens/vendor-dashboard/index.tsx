// import { Outlet } from 'react-router-dom';
import { VendorNavbar, DashboardSideBar } from '../../components';
import Overview from '../../components/Overview';
import ProductViews from '../../components/ProductViews';
import PopularProducts from '../../components/PopularProducts';
import { PopularProductType } from '../../interfaces/productInterfaces';
import ProductComments from '../../components/ProductComments';
import RefundRequests from '../../components/RefundRequests';
import GetMoreCustomers from '../../components/GetMoreCustomers';
function DashboardHome() {
	const popularProducts: PopularProductType[] = [
		{
			title: 'Crypter NFT',
			type: 'UI kit',
			status: 'active',
			imageUrl: '',
			price: '345.54',
		},
		{
			title: 'Bento matte 3D',
			type: 'illustration 1.0',
			status: 'inactive',
			imageUrl: '',
			price: '445.54',
		},
		{
			title: 'Excellent material',
			type: '3D chair',
			status: 'active',
			imageUrl: '',
			price: '345.54',
		},
		{
			title: 'Fleet-travel',
			type: 'shopping kit',
			status: 'active',
			imageUrl: '',
			price: '345.54',
		},
	];
	return (
		<div className="flex bg-gray-100 gap-1 fixed top-0 h-screen left-0 dark:bg-app-neutral-800 w-full">
			<DashboardSideBar />
			<div className="flex flex-col w-full">
				<VendorNavbar />
				<div className="flex flex-col lg:flex-row w-full mb-3 overflow-scroll pl-2 pr-3 mt-3 gap-3">
					<div className="flex gap-3 w-full flex-col">
						<Overview />
						<ProductViews />
						<GetMoreCustomers />
					</div>
					<div className="flex w-full sm:min-w-[300px] gap-3 flex-col">
						<PopularProducts products={popularProducts} />
						<ProductComments />
						<RefundRequests />
					</div>
					{/* all other components */}
					{/* <Outlet /> */}
				</div>
			</div>
		</div>
	);
}
export default DashboardHome;
