'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';
import {
	Wave,
	CpuIcon,
	ShieldCheckIcon,
	ActivityIcon,
	ArrowRight01Icon,
	Rotate,
	UsbIcon,
	Mic01Icon,
	MusicNote01Icon,
	File02Icon,
	Add01Icon,
	EyeIcon,
	EyeOffIcon,
	Coins,
	Mic,
	TableIcon,
	CodeIcon,
	SparklesIcon,
	ArrowRight
} from '@hugeicons/core-free-icons';
import { WindowMockup } from '@/components/ui/window';

function HeroSection() {
	return (
		<section aria-label='Hero' className='relative bg-gradient-to-b from-primary/10 via-background to-primary/10 py-20 lg:py-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>

				{/* Left Column - Content */}
				<div className='lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6'>

					{/* Feature Badge */}
					<Badge variant='secondary' className='h-7 px-3 py-1 gap-1.5 text-sm font-medium bg-primary/20 text-primary border-primary'>
						<HugeiconsIcon icon={ShieldCheckIcon} size={16} className='text-primary' />
						100% Client-Side & Private
					</Badge>

					{/* Main Title */}
					<h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]'>
						Oscilloscope <span className='text-primary'>Online</span>
					</h1>

					{/* Subtitle */}
					<p className='text-lg sm:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed'>
						Multi-input data logger and real-time visualizer. Process and inspect signal telemetry completely in your browser.
					</p>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto'>
						<Link href='/plotter'>
							<Button size='lg' className='gap-2'>
								<HugeiconsIcon icon={ActivityIcon} size={18} />
								Launch Visualizer
							</Button>
						</Link>
						<Link href='https://mumarshahbaz.com/projects/Oscilloscope-Online.html'>
							<Button size='lg' variant='outline' className='gap-2'>
								Learn More
								<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
							</Button>
						</Link>
					</div>

				</div>

				{/* Right Column - Graphic / Visual */}
				<div className='lg:col-span-5 flex justify-center items-center'>
					<div className='relative w-full max-w-[320px] sm:max-w-[400px] aspect-square'>
						<Image
							src='/icon.svg'
							alt='Oscilloscope Online Logo'
							fill
							priority
							className='object-contain drop-shadow-md'
						/>
					</div>
				</div>

			</div>
		</section>
	)
}

function Demo() {
	const [visibleGraphs, setVisibleGraphs] = useState<Record<string, boolean>>({
		Serial: true,
		Microphone: true,
		CSV: true,
		'Audio File': false,
	});

	const toggleGraph = (key: string) => {
		setVisibleGraphs((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const sidebarItems = [
		{ id: 'Serial', label: 'Serial', icon: UsbIcon, color: 'text-emerald-500', stroke: '#10b981', formula: 'Serial(\'COM3\', 9600)' },
		{ id: 'Microphone', label: 'Microphone', icon: Mic01Icon, color: 'text-cyan-500', stroke: '#06b6d4', formula: 'Microphone(\'System Default\')' },
		{ id: 'CSV', label: 'CSV', icon: File02Icon, color: 'text-purple-500', stroke: '#a855f7', formula: 'CSV(\'myData.csv\')' },
		{ id: 'Audio File', label: 'Audio File', icon: MusicNote01Icon, color: 'text-amber-500', stroke: '#f59e0b', formula: 'Audio(\'mySong.mp3\')' },
	];

	return (
		<section aria-label='Unified Visualizer' className='py-16 lg:py-24'>
			<div className='px-4 sm:px-6 lg:px-8'>

				{/* Section Header */}
				<div className='text-center space-y-3 mb-10'>
					<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
						Unified Visualizer
					</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg'>
						See all your data <b>Side-by-Side</b>
					</p>
				</div>

				{/* Desktop / Tablet View: Desmos UI Mockup */}
				<WindowMockup title='Oscilloscope Online — Workspace' className='hidden md:block max-w-6xl' bodyClassName='p-0 grid grid-cols-12 h-[540px] bg-background'>

					{/* Desmos-style Sidebar */}
					<div className='col-span-4 border-r border-border bg-muted/20 flex flex-col justify-between'>
						<div>
							<div className='p-3 border-b border-border flex items-center justify-between text-xs font-semibold text-muted-foreground'>
								<span>INPUT SOURCES</span>
								<button className='hover:text-foreground'>
									<HugeiconsIcon icon={Add01Icon} size={16} />
								</button>
							</div>

							{/* Graph List */}
							<div className='divide-y divide-border/60'>
								{sidebarItems.map((item, idx) => {
									const isVisible = visibleGraphs[item.id];
									return (
										<div
											key={item.id}
											className={`p-3.5 flex items-center justify-between transition-colors ${isVisible ? 'bg-background/80' : 'opacity-60'}`}
										>
											<div className='flex items-center gap-3'>
												<span className='text-xs font-mono text-muted-foreground w-3'>{idx + 1}</span>
												<div className={`p-1.5 rounded-md bg-muted ${item.color}`}>
													<HugeiconsIcon icon={item.icon} size={16} />
												</div>
												<div>
													<p className='text-sm font-semibold leading-none'>{item.label}</p>
													<p className='text-[11px] font-mono text-muted-foreground mt-1'>{item.formula}</p>
												</div>
											</div>

											<button
												onClick={() => toggleGraph(item.id)}
												className='p-1.5 text-muted-foreground hover:text-foreground transition-colors'
												title={isVisible ? 'Hide graph' : 'Show graph'}
											>
												<HugeiconsIcon icon={isVisible ? EyeIcon : EyeOffIcon} size={16} />
											</button>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* Graphing Canvas */}
					<div className='col-span-8 relative overflow-hidden flex items-center justify-center'>
						{/* Desmos Cartesian Grid */}
						<div
							className='absolute inset-0 opacity-25'
							style={{
								backgroundImage: `
                      linear-gradient(to right, #52525b 1px, transparent 1px),
                      linear-gradient(to bottom, #52525b 1px, transparent 1px)
                    `,
								backgroundSize: '16px 16px'
							}}
						/>

						{/* Major Axis Lines */}
						<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
							<div className='w-full h-[1.5px] bg-zinc-500/80' />
							<div className='h-full w-[1.5px] bg-zinc-500/80 absolute' />
						</div>

						{/* Plotted Waveforms */}
						<svg className='w-full h-full relative z-10 fill-none' viewBox='0 0 600 400' preserveAspectRatio='none'>
							{/* Serial */}
							{visibleGraphs['Serial'] && (
								<path
									d='M 0 200 Q 75 100, 150 200 T 300 200 T 450 200 T 600 200'
									stroke='#10b981'
									strokeWidth='2.5'
								/>
							)}

							{/* Microphone */}
							{visibleGraphs['Microphone'] && (
								<path
									d='M 0 200 
									L 30 195 L 60 210 L 90 180 L 120 230 L 150 160 L 180 250 L 210 140 
									L 240 260 L 270 120 L 300 270 L 330 130 L 360 240 L 390 150 L 420 220 
									L 450 170 L 480 215 L 510 185 L 540 205 L 570 198 L 600 200'
									stroke='#06b6d4'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							)}

							{/* CSV */}
							{visibleGraphs['CSV'] && (
								<g>
									<path
										d='M 0 130 
										L 40 110 L 80 145 L 120 90 L 160 100 L 200 65 L 240 125 
										L 280 80 L 320 105 L 360 70 L 400 135 L 440 95 L 480 115 
										L 520 75 L 560 105 L 600 85'
										stroke='#a855f7'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>

									{[
										[0, 130], [40, 110], [80, 145], [120, 90], [160, 100],
										[200, 65], [240, 125], [280, 80], [320, 105], [360, 70],
										[400, 135], [440, 95], [480, 115], [520, 75], [560, 105], [600, 85]
									].map(([x, y], i) => (
										<circle key={i} cx={x} cy={y} r='3' fill='#a855f7' />
									))}
								</g>
							)}

							{/* Audio File */}
							{visibleGraphs['Audio File'] && (
								<path
									d='M 0 200 
									Q 15 190, 30 200 T 60 200
									Q 75 140, 90 200 T 120 200
									Q 135 100, 150 200 T 180 200
									Q 195 70, 210 200 T 240 200
									Q 255 110, 270 200 T 300 200
									Q 315 160, 330 200 T 360 200
									Q 375 80, 390 200 T 420 200
									Q 435 130, 450 200 T 480 200
									Q 495 175, 510 200 T 540 200
									Q 555 190, 570 200 T 600 200'
									stroke='#f59e0b'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							)}
						</svg>

						{/* Graph Controls Overlay */}
						<div className='absolute top-3 right-3 border-2 bg-background border-gray-300 rounded-lg p-1.5 text-xs text-gray-500 font-mono'>
							<span className='px-2 py-0.5'>Zoom: 89%</span>
						</div>

						{/* Concept Disclaimer */}
						<div className='absolute bottom-3 right-3 border-2 border-primary bg-card shadow-xl rounded-lg p-1.5 text-md font-mono'>
							<span className='px-2 py-0.5'>Concept Demo</span>
						</div>
					</div>

				</WindowMockup>

				{/* Mobile View Fallback */}
				<div className='md:hidden border rounded-xl p-8 text-center bg-muted/30 flex flex-col items-center justify-center space-y-4'>
					<div className='p-3 bg-primary/10 rounded-full text-primary'>
						<HugeiconsIcon icon={Rotate} size={28} />
					</div>
					<div className='space-y-1'>
						<h3 className='font-semibold text-base'>Rotate Device</h3>
						<p className='text-xs text-muted-foreground max-w-xs mx-auto'>
							The concept demo requires a wider screen resolution.
						</p>
					</div>
				</div>

			</div>
		</section>
	);
}

function InputMethods() {
	return (
		<section className='py-20 border-t border-primary/10'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<h2 className='text-3xl font-bold tracking-tight text-foreground'>
						Supported Data Sources
					</h2>
					<p className='mt-3 text-muted-foreground font-medium'>
						Seamlessly connect external devices, feeds, and files into a single unified visual surface.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{INPUT_METHODS.map((method, i) => {
						return (
							<Card key={i} className='p-6 rounded-2xl border-2 border-primary/10 bg-card shadow-xs hover:border-primary/30 transition-colors space-y-3'>
								<div className='p-3 w-fit rounded-xl bg-primary text-primary-foreground'>
									<HugeiconsIcon icon={method.icon} size={24} />
								</div>
								<CardTitle className='font-bold text-lg text-foreground'>
									{method.title}
								</CardTitle>
								<CardDescription className='text-md text-muted-foreground leading-relaxed'>
									{method.description}
								</CardDescription>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	);
}

function WhyUseSection() {
	return (
		<section aria-label='Why Use Oscilloscope Online' className='py-20 bg-gradient-to-b from-background via-primary/10 to-primary/10'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

				{/* Section Header */}
				<div className='text-center space-y-3 mb-16'>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground'>
						Built for Speed, Privacy, and Precision
					</h2>
					<p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto'>
						Everything you need to capture, plot, and analyze signals without setting up complex software environments.
					</p>
				</div>

				{/* Feature Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{WHY_USE.map((feature, idx) => (
						<Card key={idx} className='p-8 rounded-3xl border border-primary/50 bg-card shadow-sm hover:shadow-xl transition-shadow space-y-4'>
							<CardHeader className='p-0 space-y-0'>
								<div className='flex items-center gap-4'>
									<div className='p-3 rounded-2xl bg-primary/10 text-primary'>
										<HugeiconsIcon icon={feature.icon} size={26} />
									</div>
									<CardTitle className='text-2xl font-bold tracking-tight text-foreground'>
										{feature.title}
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className='p-0 space-y-2'>
								<p className='text-foreground font-medium text-base sm:text-md leading-relaxed'>
									{feature.description}
								</p>
								<p className='text-muted-foreground text-base sm:text-sm leading-relaxed'>
									{feature.details}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

			</div>
		</section>
	);
}

function CallToAction() {
	return (
		<section className='py-24 relative overflow-hidden bg-primary/10'>
			<div className='max-w-5xl mx-auto px-6 relative z-10'>
				<div className='p-12 sm:p-16 rounded-3xl border-2 border-primary/20 bg-card/80 backdrop-blur-md shadow-2xl text-center space-y-6'>
					<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold'>
						<HugeiconsIcon icon={SparklesIcon} size={16} className='w-4 h-4' />
						<span>Zero Installation Required</span>
					</div>

					<h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto'>
						Ready to bring your signals to life?
					</h2>

					<p className='text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed'>
						Connect your devices or type your math equations and start visualizing data immediately in your browser.
					</p>

					<div className='pt-4'>
						<Link href='/plotter'>
							<Button size='lg' className='rounded-full text-base sm:text-lg px-6 py-5 sm:px-9 sm:py-7 font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-transform h-auto inline-flex items-center gap-2'>
								Start Plotting Now
								<HugeiconsIcon icon={ArrowRight} size={16} className='w-4 h-4 sm:w-5 sm:h-5' />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

const WHY_USE = [
	{
		title: 'What does it do?',
		icon: Wave,
		description: 'Oscilloscope Online transforms raw telemetry into interactive graphs in seconds.',
		details: 'Plot math functions, sensor data via Serial, audio waveforms, or imported CSVs in one unified, real-time workspace designed for engineers, students, and makers.'
	},
	{
		title: 'How secure & private is it?',
		icon: ShieldCheckIcon,
		description: 'Your data stays entirely on your local machine.',
		details: 'All processing happens client-side in your browser memory. There are no tracking scripts, backend databases, or remote servers capturing your signal feeds.'
	},
	{
		title: 'What does it cost?',
		icon: Coins,
		description: '100% free and open to everyone — forever.',
		details: 'No subscriptions, no paywalled features, and no ad clutter. Built as an open tool to support education, rapid prototyping, and hardware hacking.'
	},
	{
		title: 'How does it work?',
		icon: CpuIcon,
		description: 'Powered by modern browser APIs (Web Serial & Web Audio).',
		details: 'Runs locally using high-performance JavaScript engines. Enjoy zero latency, zero server round-trips, and full offline capability.'
	}
];

const INPUT_METHODS: Array<{ icon: IconSvgElement, title: string, description: string }> = [
	{
		icon: CpuIcon,
		title: 'Serial Streams',
		description: 'Connect microcontrollers like Arduino or ESP32 via standard baud configurations.'
	},
	{
		icon: Mic,
		title: 'Audio Input',
		description: 'Visualize live microphone waveform or input sound files directly inside the browser.'
	},
	{
		icon: TableIcon,
		title: 'Tables & CSVs',
		description: 'Plot manual data tables, CSV spreadsheets, and Google Forms response feeds.'
	},
	{
		icon: CodeIcon,
		title: 'JavaScript',
		description: 'Write dynamic JS logic to generate custom math signals and real-time functions.'
	}
]

export default function HomePage() {
	return (
		<article className='min-h-screen overflow-hidden'>
			{HeroSection()}
			{Demo()}
			{InputMethods()}
			{WhyUseSection()}
			{CallToAction()}
		</article>
	);
}