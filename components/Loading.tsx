import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="bg-opacity-50 fixed inset-0 !z-5000 flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-800">
      <Spinner size="xl" />
    </div>
  );
}
