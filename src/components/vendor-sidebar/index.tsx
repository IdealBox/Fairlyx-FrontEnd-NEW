import { useState } from "react";
import {
  ChevronDownIcon,
  DiamondIcon,
  HomeIcon,
  IncomeIcon,
  PromoteIcon,
  QuestionIcon,
  ShopIcon,
  UserIcon,
} from "../icons";
import { ListItem } from "../buttons";
import { useNavigate } from "react-router-dom";
import ToggleLightDarkMode from "../buttons/toggle-light-dark-mode";
import { BsPlusCircle } from "react-icons/bs";

function DashboardSideBar() {
  const [selectedItem, setSelected] = useState("home");
  const product = [
    "products",
    "products-dashboard",
    "products-drafts",
    "products-released",
    "products-comments",
    "products-scheduled",
  ];
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="sm:flex h-full overflow-y-scroll bg-white dark:bg-app-neutral-700 xl:min-w-[340px] hidden xl:max-w-[340px] p-6 gap-1 flex-col">
      <img src="/logo.svg" className="w-14" alt="" />
      <ListItem
        onClick={() => {
          setSelected("home");
          navigate("/vendor");
        }}
        selectedItem={selectedItem}
        item="home"
        text="Home"
        className="font-[600] text-gray-600 mt-9"
        iconLeft={<HomeIcon />}
      />
      <ListItem
        onClick={() => {
          if (selectedItem === "products") {
            setSelected("df");
          } else {
            setSelected("products");
          }
        }}
        selectedItem={selectedItem}
        item=""
        text="Products"
        iconRight={
          <div className="flex gap-4 items-center">
            <BsPlusCircle
              className="w-5 h-5"
              onClick={() => {
                navigate("/vendor/add-product");
              }}
            />
            <ChevronDownIcon className="" />
          </div>
        }
        className="font-[600] text-gray-600"
        iconLeft={<DiamondIcon />}
      />
      {product.includes(selectedItem) && (
        <div className="w-[255px] xl:flex hidden flex-col gap-2 ml-auto">
          <ListItem
            onClick={() => {
              setSelected("products-dashboard");
              navigate("/vendor/products");
            }}
            selectedItem={selectedItem}
            item="products-dashboard"
            text="Dashboard"
            iconRight={<ChevronDownIcon className="" />}
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-drafts");
            }}
            selectedItem={selectedItem}
            item="products-drafts"
            text="Drafts"
            iconRight={
              <div className="w-6 h-6 font-bold flex items-center justify-center rounded-lg bg-secondary-1">
                2
              </div>
            }
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-released");
            }}
            selectedItem={selectedItem}
            item="products-released"
            text="Released"
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-comments");
            }}
            selectedItem={selectedItem}
            item="products-comments"
            text="Comments"
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-scheduled");
            }}
            selectedItem={selectedItem}
            item="products-scheduled"
            text="Scheduled"
            iconRight={
              <div className="w-6 h-6 font-bold flex items-center justify-center rounded-lg bg-purple-300">
                8
              </div>
            }
            className="font-[600] text-gray-600"
          />
        </div>
      )}
      <ListItem
        onClick={() => {
          setSelected("customers");
        }}
        selectedItem={selectedItem}
        item="customers"
        text="Customers"
        iconRight={<ChevronDownIcon className="" />}
        className="font-[600] text-gray-600"
        iconLeft={<UserIcon />}
      />
      <ListItem
        onClick={() => {
          setSelected("shops");
        }}
        selectedItem={selectedItem}
        item="shops"
        text="Shop"
        className="font-[600] text-gray-600"
        iconLeft={<ShopIcon />}
      />
      <ListItem
        onClick={() => {
          setSelected("income");
        }}
        selectedItem={selectedItem}
        item="income"
        text="Income"
        iconRight={<ChevronDownIcon className="" />}
        className="font-[600] text-gray-600"
        iconLeft={<IncomeIcon />}
      />
      <ListItem
        onClick={() => {
          setSelected("promote");
        }}
        selectedItem={selectedItem}
        item="promote"
        text="Promote"
        className="font-[600] text-gray-600"
        iconLeft={<PromoteIcon />}
      />
      <div className="mt-auto flex pt-2 flex-col gap-2 border-t">
        <ListItem
          onClick={() => {
            setSelected("help");
          }}
          selectedItem={selectedItem}
          isDropdown={false}
          item="help"
          text="Help & getting started"
          className="font-[600] text-gray-600"
          iconLeft={<QuestionIcon />}
          iconRight={
            <div className="w-6 h-6 font-bold flex items-center justify-center rounded-lg bg-purple-300">
              8
            </div>
          }
        />
        <ToggleLightDarkMode isSmallScreen={false} />
      </div>
    </div>
  );
}
export default DashboardSideBar;
