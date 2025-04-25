import { MouseEventHandler, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const [display, setDisplay] = useState("true");
const [brandName, setBrandName] = useState("");
const [displayedItem, setDisplayedItem] = useState("true");
const router = useRouter();
const pathname = usePathname();

export const filterProducts: MouseEventHandler<HTMLInputElement> = (e) => {
  if (e.currentTarget.defaultValue === "Braavosi") {
    setBrandName("Braavosi");
  } else if (e.currentTarget.defaultValue === "Walder") setBrandName("Walder");
  else setBrandName("");
  if (e.currentTarget.checked) {
    setDisplay("false");
  } else {
    setDisplay("false");
    setDisplayedItem("true");
  }
};
