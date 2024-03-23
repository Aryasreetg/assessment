import { Card, CardContent } from "@/components/ui/card";
import Error from "next/error";
import Link from "next/link";
import { Key } from "react";
async function getusers() {
	const users = await fetch("https://jsonplaceholder.typicode.com/users");
	if (users) {
		return users.json();
	}
	// else {
	//   throw new Error("Failed to fetch");
	// }
}
export default async function Home() {
	const data = await getusers();
	return (
		<div className="container">
			<p>List of Users available</p>
			<div className="grid grid-cols-3 gap-4 mt-5 p-4">
				{data.map((users: any) => (
					<Card key={users.id} className="p-4">
            <CardContent>
							<p>
								Name: <Link href={`/${users.id}`}>{users.name}</Link>
							</p>
							<p>
								Email: <span>{users.email}</span>
							</p>
							<p>
								Website: <span>{users.website}</span>
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
