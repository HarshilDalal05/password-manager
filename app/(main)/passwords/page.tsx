import { PasswordList } from "./components/password-list";
import { AddPasswordButton } from "./components/add-password-button";

export default function PasswordsPage() {
  return (
    <div className=" py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Passwords</h1>
        <AddPasswordButton />
      </div>
      <PasswordList />
    </div>
  );
}
