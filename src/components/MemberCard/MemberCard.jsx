import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import memberPlaceholder from "../../assets/placeholders/member.svg";
import styles from "./MemberCard.module.css";

export default function MemberCard({
	name,
	fronts = [],
	maxFronts,
	admission,
	photo,
	githubUrl = "#",
	linkedinUrl = "#",
	instagramUrl = "#",
}) {
	const visibleFronts = typeof maxFronts === "number" ? fronts.slice(0, maxFronts) : fronts;

	const socialLinks = [
		{ href: instagramUrl, label: `Instagram de ${name}`, Icon: FaInstagramSquare },
		{ href: githubUrl, label: `GitHub de ${name}`, Icon: FaGithub },
		{ href: linkedinUrl, label: `LinkedIn de ${name}`, Icon: FaLinkedin },
	];

	return (
		<article className={styles.card}>
			<div className={styles.avatarFrame}>
				<img className={styles.avatar} src={photo || memberPlaceholder} alt={photo ? `Foto de ${name}` : `Placeholder de ${name}`} />
			</div>

			<h4 className={styles.name}>{name}</h4>

			<div className={styles.fronts}>
				{visibleFronts.map((front) => (
					<span key={front} className={styles.frontBadge}>
						{front}
					</span>
				))}
			</div>

			<p className={styles.admission}>Entrada: {admission}</p>

			<footer className={styles.socials}>
				{socialLinks.map(({ href, label, Icon }) => {
					return (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
							className={styles.socialButton}
						>
							<Icon />
						</a>
					);
				})}
			</footer>
		</article>
	);
}
