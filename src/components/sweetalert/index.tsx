import Swal from "sweetalert2";
import Reat from "react";

interface Props {
  title: string;
  status: string;
  label: string;
}

export const AppSweetaler = ({ title, status, label }: Props) => {
  const newSwal = () => {
    Swal.fire(
      title,
      label,
      status === "success"
        ? "success"
        : status === "error"
        ? "error"
        : status === "warning"
        ? "warning"
        : status === "info"
        ? "info"
        : "question"
    );
  };
  return <>{newSwal()}</>;
};
