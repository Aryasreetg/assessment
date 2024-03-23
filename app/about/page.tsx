"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
const formSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: "Name must be at least 3 characters.",
		})
		.max(20, { message: "Name must only have maximum 20 characters" }),
	email: z.string().email({ message: "Invalid Email" }),
	message: z.string().min(5, { message: "Message must have minimum 5 characters" }).max(50, {
		message: "Message must only have maximum 50 characters",
	}),
});
const Page = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		form.reset();
		toast({
			title: "Successfully submitted",
			description: `${values?.name}-${values?.email}-${values?.message}`,
		});
	}
	return (
		<>
			<div className="flex justify-center items-center">
				<Card className="p-6 w-full md:w-3/5 shadow-md">
					<CardHeader>
						<CardTitle >Contact Form</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Enter your name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="Enter your Email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea placeholder="Enter your message" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</>
	);
};
export default Page;
