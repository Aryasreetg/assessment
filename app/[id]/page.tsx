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
		<div className="container flex items-center justify-center">
			<Card className="p-4 md:p-6 w-full md:w-1/2 lg:w-2/3">
				<CardHeader>
					<CardTitle>
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							Profile
						</div>
					</CardTitle>
					<CardDescription>Find the details of the user below:</CardDescription>
				</CardHeader>
				<CardContent>
					{user && (
						<>
							<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
								<div className="mb-4">
									<p className="font-semibold">Name:</p>
									<p>{user.name}</p>
								</div>
								<div className="mb-4">
									<p className="font-semibold">Username:</p>
									<p>{user.username}</p>
								</div>
								<div className="mb-4">
									<p className="font-semibold">Email:</p>
									<p>{user.email}</p>
								</div>
								<div className="mb-4">
									<p className="font-semibold">Address:</p>
									<p>
										{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
									</p>
								</div>
								<div className="mb-4">
									<p className="font-semibold">Phone:</p>
									<p>{user.phone}</p>
								</div>
								<div className="mb-4">
									<p className="font-semibold">Website:</p>
									<p>{user.website}</p>
								</div>
								<div>
									<p className="font-sembold">Company:</p>
									<p>{user.company.name}</p>
								</div>
							</div>
						</>
					)}
				</CardContent>
			</Card>
		</div>
	);
};
export default Page;
