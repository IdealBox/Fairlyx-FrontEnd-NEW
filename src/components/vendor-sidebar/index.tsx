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
  const income = [
    "earning",
    "refunds",
    "payouts",
    "statements",
  ];

  const customer = ["overview", "customer-list"];
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
          if (product.includes(selectedItem)) {
            setSelected("df");
          } else {
            setSelected("products-dashboard");
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
              navigate("/vendor/products?pt=market");
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

              navigate("/vendor/products?tab=draft");
            }}
            selectedItem={selectedItem}
            item="products-drafts"
            text="Drafts"
            isRotatable={false}
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
              navigate("/vendor/products?tab=released");
            }}
            selectedItem={selectedItem}
            item="products-released"
            isRotatable={false}
            text="Released"
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-comments");
              navigate("/vendor/products?tab=comments");
            }}
            selectedItem={selectedItem}
            item="products-comments"
            text="Comments"
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("products-scheduled");
              navigate("/vendor/products?tab=scheduled");
            }}
            selectedItem={selectedItem}
            item="products-scheduled"
            isRotatable={false}
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
          if (customer.includes(selectedItem)) {
            setSelected("df");
          } else {
            setSelected("overview");
          }
          navigate("/vendor/products?tab=overview");
        }}
        selectedItem={selectedItem}
        item=""
        text="Customers"
        iconRight={<ChevronDownIcon className="" />}
        className="font-[600] text-gray-600"
        iconLeft={<UserIcon />}
      />
      {customer.includes(selectedItem) && (
        <div className="w-[255px] xl:flex hidden flex-col gap-2 ml-auto">
          <ListItem
            onClick={() => {
              setSelected("overview");
              navigate("/vendor/products?tab=overview");
            }}
            selectedItem={selectedItem}
            item="overview"
            text="Overview"
            iconRight={<></>}
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
              setSelected("customer-list");

              navigate("/vendor/products?tab=customer-list");
            }}
            selectedItem={selectedItem}
            item="customer-list"
            text="Customer List"
            isRotatable={false}
            iconRight={<></>}
            className="font-[600] text-gray-600"
          />
        </div>
      )}
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
			if (income.includes(selectedItem)) {
				setSelected("df");
			  } else {
				setSelected("earning");
				navigate("/vendor/products?tab=earning");
			  }
        }}
        selectedItem={selectedItem}
        item=""
        text="Income"
        iconRight={<ChevronDownIcon className="" />}
        className="font-[600] text-gray-600"
        iconLeft={<IncomeIcon />}
      />
	  {income.includes(selectedItem) && (
        <div className="w-[255px] xl:flex hidden flex-col gap-2 ml-auto">
          <ListItem
            onClick={() => {
              setSelected("earning");
              navigate("/vendor/products?tab=earning");
            }}
            selectedItem={selectedItem}
            item="earning"
            text="Earning"
            iconRight={<></>}
            className="font-[600] text-gray-600"
          />
          <ListItem
            onClick={() => {
				setSelected("refunds");
  
				navigate("/vendor/products?tab=refunds");
			  }}
			  selectedItem={selectedItem}
			  item="refunds"
			  text="Refunds"
			  isRotatable={false}
			  iconRight={<></>}
			  className="font-[600] text-gray-600"
			/>
			<ListItem
            onClick={() => {
				setSelected("payouts");
  
				navigate("/vendor/products?tab=payouts");
			  }}
			  selectedItem={selectedItem}
			  item="payouts"
			  text="Payouts"
			  isRotatable={false}
			  iconRight={<></>}
			  className="font-[600] text-gray-600"
			/>
			<ListItem
            onClick={() => {
				setSelected("statements");
  
				navigate("/vendor/products?tab=statements");
			  }}
			  selectedItem={selectedItem}
			  item="statements"
			  text="Statements"
			  isRotatable={false}
			  iconRight={<></>}
			  className="font-[600] text-gray-600"
			/>
        </div>
      )}
      <ListItem
        onClick={() => {
          setSelected("promote");
          navigate("/vendor/promote");
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
          isRotatable={false}
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
