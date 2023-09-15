enum FilterKeys {
  SortBy = "Sort by",
  DateOfBirthAsc = "Date of birth (Asc)",
  DateOfBirthDesc = "Date of birth (Desc)",
  YearsOfExpAsc = "Years of exp (Asc)",
  YearsOfExpDesc = "Years of exp (Desc)",
}

const filterOptions = [
  {
    id: 0,
    title: FilterKeys.SortBy, // reset filter
  },
  {
    id: 1,
    title: FilterKeys.DateOfBirthAsc, // youngest to oldest
  },
  {
    id: 2,
    title: FilterKeys.DateOfBirthDesc, // oldest to youngest
  },
  {
    id: 3,
    title: FilterKeys.YearsOfExpAsc, // most senior to junior
  },
  {
    id: 4,
    title: FilterKeys.YearsOfExpDesc, // most junior to senior
  },
];

export { filterOptions };
