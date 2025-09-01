import Link from "next/link";
export default function LoadButton({ text, method }) {
  return <button onClick={method}>{text}</button>;
}
