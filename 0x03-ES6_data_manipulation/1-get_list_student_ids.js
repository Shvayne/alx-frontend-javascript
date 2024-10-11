export default function getListStudentIds(lists) {
  if (!Array.isArray(lists)) {
    return [];
  }

  return lists.map((ids) => ids.id);
}
