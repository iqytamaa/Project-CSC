import List from "@/components/List";
import Link from "next/link";

export default function Page() {
return (
    <div>
        <List></List>
        <Link href="/">
    <p> Kembali ke Home</p>
    </Link>
    </div>
);
}
