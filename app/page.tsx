import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
async function getusers() {
	const users = await fetch("https://jsonplaceholder.typicode.com/users");
	if (users) {
		return users.json();
	}
}
export default async function Home() {
	const data = await getusers();
	// Function for ascending order
	function ascendingNames(a: any, b: any) {
		return b.name.localeCompare(a.name);
	}
	// Function descending order
	function descendingNames(a: any, b: any) {
		return b.name.localeCompare(a.name);
	}
	const sortedUsers = data.sort(descendingNames);
	console.log(sortedUsers);
	return (
		<div className="container">
			<p className="text-2xl font-bold mb-4 text-center">List of Users Available</p>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
				{data.map((user: any) => (
					<Card key={user.id} className="p-4 shadow-md hover:shadow-lg rounded-lg">
						<CardContent>
							<p className="text-lg font-semibold mb-2">
								<Link href={`/${user.id}`} className="text-blue-400 hover:underline">
									{user.name}
								</Link>
							</p>
							<p className="text-sm text-gray-600 mb-2">Email: {user.email}</p>
							<p className="text-sm text-gray-600">Website: {user.website}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
