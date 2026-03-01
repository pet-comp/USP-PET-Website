import styles from "./MemberCard.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MemberCard({
	name = "Nome do integrante",
	fronts = ["Social", "Gestão"],
	admission = "2023.1",
	interests = "IA e UX Design",
	photo,
	githubUrl = "#",
	linkedinUrl = "#",
}) {
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
								{fronts.map((front) => (
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
						<span className={styles.infoRegular}> {admission} </span>
						<span className={styles.infoBold}>|</span>
						<span className={styles.infoRegular}> </span>
						<span className={styles.infoBold}>Interesses:</span>
						<span className={styles.infoRegular}> {interests}</span>
					</p>

					<footer className={styles.socialIcons}>
						<a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub de ${name}`}>
							<FaGithub />
						</a>

						<a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={`LinkedIn de ${name}`}>
							<FaLinkedin />
						</a>
					</footer>
				</div>
			</div>
		</article>
	);
}
