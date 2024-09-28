export default function createArrLinks(totalPages) {
  const arrLinks = [];
  for (let i = 0; i < totalPages; i++) {
    arrLinks.push(i);
  }
  return arrLinks;
}
