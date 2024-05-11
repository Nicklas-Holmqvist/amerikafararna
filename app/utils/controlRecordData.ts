export const controlRecordData = (data: string | number | null) => {
  if (data !== null) return data;
  else return '-';
};
