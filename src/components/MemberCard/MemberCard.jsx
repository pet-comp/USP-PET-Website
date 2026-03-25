import styles from "./MemberCard.module.css";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function MemberCard({
	name = "Nome do integrante",
	fronts = ["Social", "Gestão"],
	maxFronts,
	admission = "2023.1",
	interests = "IA e UX Design",
	photo,
	githubUrl = "#",
	linkedinUrl = "#",
	instagramUrl = '#',
}) {
	const socialLinks = [
		{ href: instagramUrl, label: `Instagram de ${name}`, Icon: FaInstagramSquare },
		{ href: githubUrl, label: `GitHub de ${name}`, Icon: FaGithub },
		{ href: linkedinUrl, label: `LinkedIn de ${name}`, Icon: FaLinkedin },
	];

	const visibleFronts = typeof maxFronts === "number" ? fronts.slice(0, maxFronts) : fronts;

	return (
		<article className={styles.container}>
			<div className={styles.card}>
				<div className={styles.content}>
					<header className={styles.header}>
						<div className={styles.avatarWrapper}>
							{photo ? (
								<img className={styles.avatar} src={photo} alt={`Foto de ${name}`} />
							) : (
								<div className={styles.avatarInner} aria-hidden="true" />
							)}
						</div>

						<div className={styles.headerText}>
							<div className={styles.name}>{name}</div>

							<div className={styles.badges}>
								{visibleFronts.map((front) => (
									<span key={front} className={styles.badge}>
										{front}
									</span>
								))}
							</div>
						</div>
					</header>

					<div className={styles.divider} />

					<p className={styles.info}>
						<span className={styles.infoBold}>Ingresso:</span>
						 {admission} 
						<span className={styles.infoBold}>|</span>
						 {" "}
						<span className={styles.infoBold}>Interesses:</span>
						 {interests}
					</p>

					<footer className={styles.socialIcons}>
						{socialLinks.map(({ href, label, Icon }) => (
							<a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
								<Icon />
							</a>
						))}
					</footer>
				</div>
			</div>
		</article>
	);
}
