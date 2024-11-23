import { Icons } from "@/components/Icon";
import MenuItemPopup from "@/components/popups/MenuItemPopup";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { BetaMenuActive } from "@/lib/constants";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { getMenuItemById } from "@/lib/get-menu-item-by-id";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { FC } from "react";

interface MenuItemProps {
  id: string;
}

const MenuItem: FC<MenuItemProps> = ({ id }) => {
  const { items } = useRestaurant();
  const { removeItem, updateItem, cartItems } = useCart();
  const item = getMenuItemById(id, items);
  return (
    item && (
      <div className="z-10 flex h-[200px] w-full flex-row items-center border-[1px] border-primary rounded-xl overflow-hidden">
        <div className="flex h-full w-[40%]">
          {item.images[0] ? (
            <Image
              src={item.images[0]}
              width={1980}
              height={1080}
              alt={item.name}
              className="z-10 h-full max-h-[300px] w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center ">
              <Image
                src="/images/menu/items/item-placeholder.svg"
                alt="item-placeholder"
                width={106}
                height={108}
                className="z-10 h-full max-h-[300px] w-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex w-[60%] flex-col items-center justify-between gap-6 p-[2.5rem] md:flex-row">
          <div className="flex w-full flex-col gap-[1.62rem]">
            <h2 className="w-full text-[1.25rem] font-normal leading-[150%] text-primary">
              {item.name}
            </h2>
            <p className="text-[1.35rem] font-medium leading-[80%] text-primary">
              {getCurrencySymbol(item.price.currency)}{" "}
              {formattedItemPrice(item.price.value)}
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            {cartItems.find((cartItem) => cartItem._idMenuItem === item._id) ===
              undefined ? (
              <MenuItemPopup item={item}>
                <Button
                  className={cn(
                    "bottom-2 w-fit rounded-none text-[1.25rem] font-medium leading-[80%] text-[#fffdf0]",
                    !BetaMenuActive && "hidden",
                  )}
                >
                  Add
                </Button>
              </MenuItemPopup>
            ) : (
              <div className="flex h-fit w-fit items-center gap-3 bg-primary text-[#fffdf0] p-2">
                <Button
                  className={cn(
                    "h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent",
                    !BetaMenuActive && "hidden",
                  )}
                  onClick={() => {
                    if (
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity <= 1
                    ) {
                      return removeItem(item._id);
                    }
                    updateItem(
                      item._id,
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity - 1,
                    );
                  }}
                >
                  <Icons.remove className="text-[#282828]" />
                </Button>
                {
                  cartItems.find(
                    (cartItem) => cartItem._idMenuItem === item._id,
                  )!.quantity
                }
                <Button
                  className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                  onClick={() => {
                    updateItem(
                      item._id,
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity + 1,
                    );
                  }}
                >
                  <Icons.add className="text-[#282828]" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MenuItem;
