import { redirect } from "next/navigation";

export default function CodingPortfolioRedirect() {
  redirect("/myworks?category=coding");
}
