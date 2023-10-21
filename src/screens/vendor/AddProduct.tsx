import { VendorNavbar, DashboardSideBar } from "../../components";
import ProductsInputForm from "./components/ProductInputForm";
import BottomSection from "./products/components/BottomSection";
import PreviewCard from "./products/components/PreviewCard";
function AddProduct() {
  return (
    <div className="flex bg-gray-100 gap-1 fixed top-0 h-screen left-0 dark:bg-app-neutral-800 w-full">
      <DashboardSideBar />
      <div className="flex flex-col w-full">
        <VendorNavbar />
        <div className="font-bold text-5xl pt-5 pl-5 dark:text-white">New Product</div>
        <div className="flex p-4 lg:flex-row overflow-scroll flex-col items-start gap-4">
          <ProductsInputForm />
          <div className="w-full lg:flex hidden ">
            <PreviewCard />
          </div>
        </div>
        <BottomSection />
      </div>
    </div>
  );
}
export default AddProduct;
