import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }
  return children;
}
