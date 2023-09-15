const formatNumberOfEmployeeLabel = (numberOfEmployees: number) => {
  switch (numberOfEmployees) {
    case 0:
      return "No employees";
    case 1:
      return `There is 1 employee`;
    default:
      return `There are ${numberOfEmployees} employees`;
  }
};

export { formatNumberOfEmployeeLabel };
