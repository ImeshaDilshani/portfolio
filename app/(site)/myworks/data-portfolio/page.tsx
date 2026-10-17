import { redirect } from "next/navigation";

export default function DataPortfolioRedirect() {
  redirect("/myworks?category=data");
}
