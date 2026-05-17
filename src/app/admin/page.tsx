import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { LoginForm } from "@/components/admin/LoginForm";

export default async function AdminPage() {
  if (await isAuthenticated()) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <p className="heading-caps">Arca Guest Portal</p>
        <h1 className="mt-2 font-heading text-3xl font-light">Admin</h1>
        <p className="mt-3 font-body text-sm text-charcoal-muted">
          Sign in to update welcome messages, menus, events, and more.
        </p>
        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
