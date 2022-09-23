import { v4 as uuid } from "uuid";

export default function UniqueId(size: number) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, size);
  return small_id;
}
