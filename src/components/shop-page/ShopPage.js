import React from "react";
import ShopNav from "./ShopNav";
import ShopBanner from "./ShopBanner";
import OnSale from "./OnSale";

function ShopPage() {
  return (
    <div>
      <ShopNav />
      <ShopBanner />
      <OnSale />
    </div>
  );
}

export default ShopPage;
