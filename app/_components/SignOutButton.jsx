import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-accent-600 hover:text-primary-950 rounded-lg  transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <span className="flex items-center gap-4">
          Sign out <p>&rarr;</p>
        </span>
      </button>
    </form>
  );
}

export default SignOutButton;
