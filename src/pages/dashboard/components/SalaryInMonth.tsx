import React from "react";
import Statistics from "./Statistics";
import { InformationProps } from "../../../types/models/information";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface Props {
  employee: InformationProps[];
}

const SalaryInMonth = ({ employee }: Props) => {
  const title = "Salary Payable In 1 Month";
  const salaryInMonth = employee.reduce(
    (total: number, item: InformationProps) => total + item.earnings,
    0
  );
  return (
    <Statistics
      title={title}
      statistical={salaryInMonth}
      icon={<AccountBalanceWalletIcon />}
      isMoney={true}
    />
  );
};

export default SalaryInMonth;
