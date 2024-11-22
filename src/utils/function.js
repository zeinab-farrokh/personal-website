function sortData(data) {
  return data.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

export { sortData };
