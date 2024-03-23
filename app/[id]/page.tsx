"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const Page = ({ params }: { params: { id: number } }) => {
	const [user, setUser] = useState<any>(null);
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				const userData = await res.json();
				setUser(userData);
			} catch (error) {
				console.error(error);
			}
		};
		fetchUser();
	}, [params?.id]);
	return (
		<div className="container  flex items-center justify-center">
			<Card className=" p-2 w-1/3">
				<CardHeader>
					<CardTitle>
						<div className="flex gap-2 items-center">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							Profile
						</div>
					</CardTitle>
					<CardDescription>find the details of user below</CardDescription>
				</CardHeader>
				<CardContent>
					{user && (
						<>
							<p>
								Name: <span>{user.name}</span>
							</p>
							<p>
								Email: <span>{user.email}</span>
							</p>
							<p>
								Website: <span>{user.website}</span>
							</p>
						</>
					)}
				</CardContent>
			</Card>
		</div>
	);
};
export default Page;
