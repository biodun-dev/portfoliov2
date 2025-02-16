import { json } from '@remix-run/node';

export const loader = async () => json({ message: "Test route works!" });

export default function Test() {
  return <h1>Test Route is Working ✅</h1>;
}
