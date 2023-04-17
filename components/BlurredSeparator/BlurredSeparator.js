import classNames from "classnames";
import styles from "./BlurredSeparator.module.scss";
import { useEffect, useState } from "react";
export default function BlurredSeparator({}) {
	const [steps, setSteps] = useState([]);
	useEffect(() => {
		let width = 100;
		const max = 0.4;
		const min = 0.1;
		const pieces = [];
		while (width > 0) {
			let piece = 100 * (Math.random() * (max - min) + min);
			width -= piece;
			if (width < 0) {
				piece = piece + width;
			}
			pieces.push(piece);
		}
		setSteps(pieces);

	}, []);
	return (
		<div className={classNames("mt-5", "mb-4", styles.separator)}>
			<div className={styles.bar} />
			{steps.map((d, i) => (
				<div
					key={i}
					className={styles.lens}
					style={{
						width: `${100 * d}%`,
						backdropFilter: `blur(${i}px)`,
					}}
				/>
			))}
		</div>
	);
}
