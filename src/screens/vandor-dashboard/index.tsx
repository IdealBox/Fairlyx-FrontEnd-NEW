import { VendorNavbar, DashboardSideBar } from '../../components'
function DashboardHome() {
  return (
    <div className='flex bg-gray-100 dark:bg-neutral-08 w-full h-screen'>
        <DashboardSideBar />
        <div className='flex flex-col w-full'>
            <VendorNavbar />
        </div>
    </div>
  )
}
export default DashboardHome