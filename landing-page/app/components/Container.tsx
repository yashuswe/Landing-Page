import { VerticalDiv } from './VerticalDiv';
import Gallery from './Gallery';
import styles from "./carousel.module.scss";

export const Containerc = () => {
    return (
        <div className={styles.container}>
            <VerticalDiv />
            <Gallery />
        </div>
    );
};

