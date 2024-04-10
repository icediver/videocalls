'use client';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

export function Home() {
	const [value, setValue] = useState('');
	const [isError, setIsError] = useState(false);
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (!/^([0-9]*$)/.test(event.target.value)) {
			event.preventDefault();
			setIsError(true);
			return;
		}
		setValue(event.target.value);
		setIsError(false);
	}
	return (
		<main className="h-screen w-screen">
			<div className="relative top-1/3 mx-auto flex h-1/4 w-1/4 -translate-y-1/2 flex-col items-center justify-between rounded-xl bg-slate-900 p-6">
				<h1 className="text-center text-3xl font-semibold text-slate-500">
					Video Conference
				</h1>
				<div className="flex w-full flex-col items-center justify-evenly">
					<div className="w-full">
						<input
							className="h-12 w-full rounded px-8 text-center text-xl"
							placeholder="enter conference id"
							value={value}
							onChange={handleChange}
						/>
						<div className="my-1 h-6 w-full">
							{isError && (
								<p className="text-orange-500">
									Error: conference id must be a number
								</p>
							)}
						</div>
					</div>
					<Link
						className="text-md h-12 w-full rounded bg-teal-400 px-3 py-2 text-center text-xl active:translate-y-1"
						href={`/room/${value}`}
					>
						Join conference
					</Link>
				</div>
			</div>
		</main>
	);
}
