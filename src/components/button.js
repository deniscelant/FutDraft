import Link from "next/link";
export default function LoadButton({ text, method}) {
  return (
    <Link href={method}>
      <button>{text}</button>
    </Link>
  );
}
