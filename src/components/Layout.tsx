import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import logo from '@/../public/logo.png';
import styles from '@/styles/layout.module.scss';
import AuthPanel from './AuthPanel';
import LanguagePicker from './LanguagePicker';

function Navbar() {
	const { t } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<div className={styles.navbar}>
			<Image src={logo} alt="home" className={styles.logo} />

			<div className={styles.navLinks}>
				<Link href="/" type="button">
					{t('home')}
				</Link>
				<Link href="/about" type="button">
					{t('about')}
				</Link>
				<Link href="/contact" type="button">
					{t('contact')}
				</Link>
				<Link href="/certificates" type="button">
					{t('certificates')}
				</Link>
			</div>

			<div className={styles.navLinks}>
				<LanguagePicker />
				<Link href="/join" type="button" className={styles.join}>
					{t('join')}
				</Link>
				<AuthPanel />
			</div>

			<button onClick={toggleMobileMenu} className={styles.hamburger}>
				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			{isMobileMenuOpen && (
				<div className={styles.mobileMenu}>
					<Link href="/" type="button" onClick={toggleMobileMenu}>
						{t('home')}
					</Link>
					<Link href="/about" type="button" onClick={toggleMobileMenu}>
						{t('about')}
					</Link>
					<Link href="/contact" type="button" onClick={toggleMobileMenu}>
						{t('contact')}
					</Link>
					<Link href="/certificates" type="button" onClick={toggleMobileMenu}>
						{t('certificates')}
					</Link>
					<Link
						href="/join"
						type="button"
						className={styles.join}
						onClick={toggleMobileMenu}
					>
						{t('join')}
					</Link>

					<div className={styles.bottomPanel}>
						<LanguagePicker />
						<AuthPanel />
					</div>
				</div>
			)}
		</div>
	);
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<title>IT Lab HoGent</title>
				<link rel="icon" href="/logo.png" />
				<meta
					name="description"
					content="IT Lab is een initiatief voor studenten, door studenten van HoGent."
				/>
			</Head>

			<div className={styles.layout}>
				<Navbar />

				<main>{children}</main>

				<footer>
					2023 © IT Lab HoGent
					<a
						target="_blank"
						href="https://github.com/HOGENT-IT-Lab"
						rel="noopener noreferrer"
					>
						<BsGithub />
					</a>
					<a
						target="_blank"
						href="https://discord.gg/tihogent"
						rel="noopener noreferrer"
					>
						<BsDiscord className={styles.discord} />
					</a>
				</footer>
			</div>
		</>
	);
}
