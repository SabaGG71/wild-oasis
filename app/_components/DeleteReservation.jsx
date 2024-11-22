"use client";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { deleteBooking } from "../_lib/actions";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => deleteBooking(bookingId));
  }
  return (
    <button
      onClick={handleDelete}
      className="group max-xl:py-6 gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {!isPending ? (
        <span className="mt-1">Delete</span>
      ) : (
        <span className="mx-auto text-center items-center">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
